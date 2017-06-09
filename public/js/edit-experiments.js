/* ================================= GET EXPERIMENTS TO EDIT =================================*/
let fullPathName = window.location.pathname;

let response;

function geExperimentEntries(callbackFn) {
	console.log(fullPathName);
  $.ajax({
    url: `/${fullPathName}/json`,
    type: 'GET',
    dataType: 'json',

    success: function(data) {
      if(data) {
        callbackFn(data);

	   //console.log(data);

	   response = data;

	   console.log(response);
      }
    }
  });
}
/* ================================= FILL READ ONLY WITH DATA =================================*/
function displayExperiment(data){

	//checks to see if experiment is complete
	if (data.status === 'complete') {
		$('#edit').addClass('hidden');
		$('#dme').addClass('hidden');
	};


	$('.title').text(data.title);
	$('.author').text(data.author);
	$('.created').text(data.created);
	$('.background').text(data.background);
	$('.purpose').text(data.purpose);
	$('.procedure').text(data.procedure);
	$('.mce').html(data.results.text);

	if(data.results.drawing.length >= 0){
		$("<img>", {
	  	"src":data.results.drawing,
	  	// added `width` , `height` properties to `img` attributes
	  	"width": "250px", "height": "250px"})
		.appendTo(".drawing");

	} else {
		$('.drawing').text('No images Drawn');
	};

	$('.molecule').text(data.results.molecule);
	$('.conclusion').html(data.conclusion);
	$('.id').text(data.id);
}

/* ================================= IIFE =================================*/

$(function() {
  geExperimentEntries(displayExperiment);
});

/* ================================= EDIT DELETE PRINT BUTTONS========================================*/

$('.delete-button').on('click', function(event) {
	event.preventDefault();
	const experimentId = $(this).closest('dd').prev('dt').attr('id');
	$(this).closest('dd').prev().addClass('fadeOut');
	$(this).closest('dd').addClass('fadeOut');

	if (confirm('Are you sure you want to delete?')) {
		$.ajax({
			url: `/delete/${fullPathName}`,
			type: 'DELETE',
			dataType: 'json',

			success: function(data) {
				window.location.href = '/dashboard';

			}
		});
	} else {
		location.reload(true);
	}

});

$('.edit-button').on('click', function(event){
	event.preventDefault();
	//alert('this will bring up multi-step form & reRender database inputs');
	$('#read-only').addClass('hidden');
	$('#msform').removeClass('hidden');
	$('#undo').removeClass('hidden');
	$('#complete').removeClass('hidden');
	$('#submit').removeClass('hidden');
	$('#pdf').addClass('hidden');
	$('#edit').addClass('hidden');
	//$('.switch-label').removeClass('hidden');
	$('#status').removeClass('hidden');

	$('#title').removeAttr('required');

	//textareas
	$('#title').val(response.title).css('color', 'teal');
	$('#background').val(response.background).css('color', 'teal');
	$('#purpose').val(response.purpose).css('color', 'teal');
	$('#procedure').val(response.procedure).css('color', 'teal');
	$('#conclusion').val(response.conclusion).css('color', 'teal');

	//tinyMCE
	var text = response.results.text;
	console.log(text);
	tinymce.get("texteditor").setContent(text);

	//doodleCanvas
     var canvas = $('#doodleCanvas')[0];
     var context = canvas.getContext('2d');
     var img = new Image();

     img.onload = function() {
     context.drawImage(img, 0, 0);
     }

     img.src =response.results.drawing;



	//molecular editor
	var molecule = response.results.molecule;
	console.log(molecule);
	chemwriter.components['editor'].setMolfile(molecule);

})


$('#undo').on('click', function(event){
	event.preventDefault();
	location.reload(true);
})


$('#complete').on('click', function(event){
	event.preventDefault();
	alert('Your experiment has been completed');
	// TODO:AJAX PUT REQUEST TO CHANGE STATUS TO COMPLETE
	location.reload(true);
	if (status === 'complete') {
		$('#edit').addClass('hidden');
	}
})


$('.button-delete').on('click', function(event){
	event.preventDefault();
	console.log('clearing canvas');
     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
     clickX = [];
     clickY = [];
     clickDrag = [];
})

$("#status").click(function () {
            $(this).text(function(i, v){
               return v === 'complete' ? 'pending' : 'complete'
            })
        });

/* ================================= Print========================================*/

$('button').click(function() {
    exportOne();
});

function exportOne(){
    var pdf = new jsPDF('p', 'px', [1145 , 794]),
        source = $('#form');

    pdf.addHTML(
          source, 0, 0, {
              pagesplit: true
          },
          function(dispose){
              pdf.save(response.created + '_' +response.title +'.pdf');
          }
      );
}

/* ================================= Multi-step Form with Progress Bar========================================*/

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").on('click',function(event){
	event.preventDefault();
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	//console.log(current_fs);
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInSine'
	});
});

$(".previous").on('click',function(event){
	event.preventDefault();
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	//console.log(current_fs)
	previous_fs = $(this).parent().prev();

	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInSine'
	});
});



//TODO: allow for progressbar navigation
$('#step1').on('click',function(event){
	event.preventDefault();
	console.log('step1 clicked');

});


$('#step2').on('click',function(event){
	event.preventDefault();
	console.log('step2 clicked');


});

$('#step3').on('click',function(event){
	event.preventDefault();
	console.log('step3 clicked');

});

$('#step4').on('click',function(event){
	event.preventDefault();
	console.log('step4 clicked');


});

$('#step5').on('click',function(event){
	event.preventDefault();
	console.log('step5 clicked');

});

$('#step6').on('click',function(event){
	event.preventDefault();
	console.log('step6 clicked');


});



/* ================================= RESPONSIVE NAVIGATION =================================*/

    $('.handle').on('click', function(event) {
      $('nav ul').toggleClass('showing');
    });

    $(document).ready(function() {

      $('.set > a').on('click', function() {
        var panelSymbol = $(this).find('i');
        if (panelSymbol.hasClass('fa-plus')) {
          $(panelSymbol).removeClass('fa-plus').addClass('fa-minus');
        } else {
          $(panelSymbol).removeClass('fa-minus').addClass('fa-plus');
        }

        $(this).toggleClass('active').next().toggle(200);
      });

    });


/* ================================= EDIT SUBMISSION========================================*/

//global variable
var title,background,purpose,procedure,text,drawing,molecule,conclusion;

//variable that holds blog entries
var data = {
    results:{},
};

//API EDIT request

//path must not have a / for ids to match
path = fullPathName.slice(1);

var editEntry = {
     "url": `/edit/${fullPathName}`,
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "PUT",
     "data": JSON.stringify(data),
};



$('#submit').on('click',function(event){
    event.preventDefault();

    // updates global variables based on user input
    title = $('#title').val();
    background = $('#background').val();
    purpose = $('#purpose').val();
    procedure = $('#procedure').val();
    text = tinymce.get("texteditor").getContent();
    drawing = ($('#doodleCanvas')[0]).toDataURL('image/png',1.0);
    molecule = chemwriter.components['editor'].getMolfile();
    conclusion = $('#conclusion').val();
    status = $('#status').text();
    console.log(status);

    // updates data variable with combined user input values

    data.id = path;
    data.title = title;
    data.background = background;
    data.purpose = purpose;
    data.procedure = procedure;
    data.results.text = text;
    data.results.drawing = drawing;
    data.results.molecule = molecule;
    data.conclusion = conclusion;
    data.status =  status;

	console.log (data);

	//updates data variable into JSON string
	editEntry.data = JSON.stringify(data);

	console.log(editEntry);

	// conditionals that requires users to fill in title field
	if (title.length === 0 ){
		alert('Please provide a title to save current experiment');
		$('#title').attr('required');
		// TODO: make fieldset go back to background field
		return false;
    };

    //conditionals checking status
    if(data.status === 'complete'){


	    if (confirm('Are you sure you want your experiment status to be complete? Setting status to "complete" disables future edits.')) {
		    $.ajax(editEntry).done(function(response) {
			     data = response;
	               console.log(data);
	     		alert('Your experiment has been properly saved.');
				location.reload(true);
	     		//window.location.href = '/dashboard';
	          }).fail(function(error){
	     		console.log(error);
	     		alert('Something went wrong with the server. Try again later');
	     	});
	    } else {};

    };


    if(data.status === 'pending'){
	    // updates data variable with combined user input values

	    data.id = path;
	    data.title = title;
	    data.background = background;
	    data.purpose = purpose;
	    data.procedure = procedure;
	    data.results.text = text;
	    data.results.drawing = drawing;
	    data.results.molecule = molecule;
	    data.conclusion = conclusion;
	    data.status =  status;

		console.log (data);

		//updates data variable into JSON string
	     editEntry.data = JSON.stringify(data);

	    $.ajax(editEntry).done(function(response) {
	          console.log(response);
			alert('Your experiment has been properly saved.');
			//location.reload(true);
	     }).fail(function(error){
			console.log(error);
			alert('Something went wrong with the server. Try again later');
		});

    }else{
	 //DO NOTHING
    };


});

$('#title').on('keydown',function(){
     $('#title').removeAttr('required');
});
