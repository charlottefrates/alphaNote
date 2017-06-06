$('.button-delete').on('click', function(event){
	event.preventDefault();
	console.log('clearing canvas');
     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
     clickX = [];
     clickY = [];
     clickDrag = [];
})

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


/* ================================= POST SUBMISSION========================================*/
//global variable
var title,background,purpose,procedure,text,drawing,molecule,conclusion;

//variable that holds blog entries
var data = {
    results:{},
};

//API POST request
var newLocalEntry = {
     "url": "/experiments/new",
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "POST",
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

    // updates data variable with combined user input values


    data.title = title;
    data.background = background;
    data.purpose = purpose;
    data.procedure = procedure;
    data.results.text = text;
    data.results.drawing = drawing;
    data.results.molecule = molecule;
    data.conclusion = conclusion;

	console.log (data);

	//updates data variable into JSON string
     newLocalEntry.data = JSON.stringify(data);

	// conditionals that requires users to fill in title field
	if (title.length === 0 ){
		alert('Please provide a title to save current experiment');
		$('#title').attr('required');
		// TODO: make fieldset go back to background field
		return false;
    };


    $.ajax(newLocalEntry).done(function(response) {
          console.log(response);
		alert('Your experiment has been properly saved.');
		window.location.href = '/dashboard';
     }).fail(function(error){
		console.log(error);
		alert('Something went wrong with the server. Try again later');
	});


});

$('#title').on('keydown',function(){
     $('#title').removeAttr('required');
});
