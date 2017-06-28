/* ================================= GET EXPERIMENTS TO EDIT =================================*/
let fullPathName = window.location.pathname;

let response;

function geExperimentEntries(callbackFn) {
	console.log(fullPathName);
  $.ajax({
    url: `${fullPathName}/json`,
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

	$('#msform').addClass('hidden');
	//checks to see if experiment is complete
	if (data.status === ' Complete') {
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

//Deletes experiments
$('#dme').on('click', function(event) {
	event.preventDefault();
	const experimentId = $(this).closest('dd').prev('dt').attr('id');
	$(this).closest('dd').prev().addClass('fadeOut');
	$(this).closest('dd').addClass('fadeOut');

	if (confirm('Are you sure you want to delete?')) {
		$.ajax({
			url: `/delete${fullPathName}`,
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

//Opens multi-step form
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


//Goes back to edit html
$('#undo').on('click', function(event){
	event.preventDefault();
	location.reload(true);
})


//Mark Experiment complete
$('#complete').on('click', function(event){
	event.preventDefault();
	alert('Your experiment has been completed');
	// TODO:AJAX PUT REQUEST TO CHANGE STATUS TO COMPLETE
	location.reload(true);
	if (status === 'complete') {
		$('#edit').addClass('hidden');
	}
})


//Deletes doodle canvas
$('.button-delete').on('click', function(event){
	event.preventDefault();
	console.log('clearing canvas');
     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
     clickX = [];
     clickY = [];
     clickDrag = [];
})

$("#status").click(function () {
            $(this).text(' Complete');
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

$("li.next").on('click', function(event) {
     var elemClicked = event.currentTarget;
     var noNext = $(elemClicked).attr('next');
     console.log(elemClicked);

     //+ converts into integer
     current_fs = "showStep" + (+noNext -1);
     console.log(current_fs);
     $('#step1').removeClass('active');

     //activate next step on progressbar using the index of next_fs
     $("#progressbar #step" + (+noNext-1)).addClass("active");

     console.log(+noNext-1);

     for (var i = 1; i < 8; i++) {
          if ( i != (+noNext-1)){
               $(".showStep"  + i).hide();
			$("#progressbar #step" + i).removeClass("active");

          };
     };


     //show the next fieldset
     $("." + current_fs).show();


});


$("i.next").on('click', function(event) {
     var elemClicked = event.currentTarget;
     var noNext = $(elemClicked).attr('next');
     var next_fs = "showStep" + noNext;
     console.log(elemClicked);
     console.log(next_fs);

     //+ converts into integer
     current_fs = "showStep" + (+noNext -1);

     //activate next step on progressbar using the index of next_fs
     $("#progressbar #step" + +noNext).addClass("active");

     //show the next fieldset
     $("." + next_fs).show();
     //hide the current fieldset with style
     $("." + current_fs).hide();

});



$(".previous").on('click', function(event) {
     event.preventDefault();
     var elemClicked = event.currentTarget;
     var noPrev = $(elemClicked).attr('next');
     var next_fs = "showStep" + noPrev;

     //+ converts into integer
     current_fs = "showStep" + (+noPrev +1);

     //activate next step on progressbar using the index of next_fs
     $("#progressbar #step" + +noPrev).addClass("active");


     //show the next fieldset
     $("." + next_fs).show();
     //hide the current fieldset with style
     $("." + current_fs).hide();

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
var path = fullPathName.slice(1);

var editEntry = {
     "url": `edit/${path}`,
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

	//console.log (data);

	//updates data variable into JSON string
	editEntry.data = JSON.stringify(data);

	//console.log(editEntry);

	// conditionals that requires users to fill in title field
	if (title.length === 0 ){
		alert('Please provide a title to save current experiment');
		$('#title').attr('required');
		// TODO: make fieldset go back to background field
		return false;
    };

    //conditionals checking status
    if(data.status === ' Complete'){


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
	    } else {

		    $('#status').text(' Mark as Complete');
	    };

    };


    if(data.status === ' Mark as Complete'){
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
	    data.status =  'Pending';

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

/* ================================= Scroll to Top ========================================*/
$(window).scroll(function() {
if ($(this).scrollTop() > 50 ) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
} else {
    $('.scrolltop').stop(true, true).fadeOut();
}

$(function(){
    $(".scroll").click(function(){
        $("html,body").stop(true, false).animate({
            scrollTop:$("#navbar").offset().top},"900",'swing');return false;})
       });

});
