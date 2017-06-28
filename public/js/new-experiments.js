/* ================================= GLOBAL VARIABLES =================================*/
var title, background, purpose, procedure, text, drawing, molecule, conclusion;

//variable that holds blog entries
var data = {
     results: {},
};

//variable that captures response after POST submission
var server_response;

// Captures response.id form first POST in a different variable for PUT request
var path;

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

/* ================================= Multi-step Form with Progress Bar========================================*/

var current_fs, next_fs, previous_fs; //fieldsets


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


$(".previous").on('click', function(event) {
     event.preventDefault();
     var elemClicked = event.currentTarget;
     var noPrev = $(elemClicked).attr('next');
     var next_fs = "showStep" + noPrev;

     //+ converts into integer
     current_fs = "showStep" + (+noPrev +1);

     //activate next step on progressbar using the index of next_fs
     $("#progressbar #step" + +noPrev).addClass("current");

     //show the next fieldset
     $("." + next_fs).show();
     //hide the current fieldset with style
     $("." + current_fs).hide();

});



/* ================================= CLEAR DOODLE =================================*/

$('.button-delete').on('click', function(event) {
     event.preventDefault();
     console.log('clearing canvas');
     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
     clickX = [];
     clickY = [];
     clickDrag = [];
})

/* ================================= STATUS: COMPLETE VS PENDING =================================*/

$("#status").on('click',function() {
     $(this).text(function(i, v) {
          $(this).text(' Complete');

     });
});

$('#title').on('keydown', function() {
     $('#title').removeAttr('required');
});

/* ================================= POST SUBMISSION: NEW EXPERIMENT========================================*/

//API POST request
var newLocalEntry = {
     "url": "/new",
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "POST",
     "data": JSON.stringify(data),
};



$('#submit_first').on('click', function(event) {
     event.preventDefault();

     // updates global variables based on user input
     title = $('#title').val();
     background = $('#background').val();
     purpose = $('#purpose').val();
     procedure = $('#procedure').val();
     text = tinymce.get("texteditor").getContent();
     drawing = ($('#doodleCanvas')[0]).toDataURL('image/png', 1.0);
     molecule = chemwriter.components['editor'].getMolfile();
     conclusion = $('#conclusion').val();
     status = $('#status').text();

     // updates data variable with combined user input values

     data.title = title;
     data.background = background;
     data.purpose = purpose;
     data.procedure = procedure;
     data.results.text = text;
     data.results.drawing = drawing;
     data.results.molecule = molecule;
     data.conclusion = conclusion;
     data.status = status;

     //console.log(data);

     //updates data variable into JSON string
     newLocalEntry.data = JSON.stringify(data);

     // conditionals that requires users to fill in title field
     if (title.length === 0) {
          alert('Please provide a title to save current experiment');
          $('#title').attr('required');
          // TODO: make fieldset go back to background field
          return false;
     };

     //conditionals checking status
     if(data.status === ' Complete'){
          if (confirm('Are you sure you want your experiment status to be complete? Setting status to "complete" disables future edits.')) {
               $.ajax(newLocalEntry).done(function(response) {
                    alert('Your experiment has been properly saved.');
                    server_response = response;
                    editEntry.url = '/edit/'+server_response.id;
                    console.log(editEntry);
                    path = server_response.id;
                    console.log(server_response);
                    window.location.href = `/${server_response.id}`;
                    //TODO: Upon saving automaticaly show fieldset "showStep6"
               }).fail(function(error) {
                    console.log(error);
                    alert('Something went wrong with the server. Try again later');
                    });
     	} else {};

     };


     if(data.status === ' Mark as Complete'){

          //updates the status to default text "Pending" instead of Mark as Complete
          data.status = 'Pending';
          newLocalEntry.data = JSON.stringify(data);

          $.ajax(newLocalEntry).done(function(response) {
               alert('Your experiment has been properly saved.');
               server_response = response;
               editEntry.url = '/edit/'+server_response.id;
               console.log(editEntry);
               path = server_response.id;
               console.log(server_response);
               $('#submit_first').addClass('hidden');
               $('#submit_second').removeClass('hidden');
               //TODO: Upon saving automaticaly show fieldset "showStep6"
          }).fail(function(error) {
               console.log(error);
               alert('Something went wrong with the server. Try again later');
               });
     }else{
       //DO NOTHING
     };

     $('#status').removeClass('hidden');



});

/* ================================= PUT SUBMISSION: EDIT-SAVE EXPERIMENT========================================*/

//API PUT request
var editEntry = {
     "url": `/`,
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "PUT",
     "data": JSON.stringify(data),
};


$('#submit_second').on('click',function(event){
    event.preventDefault();

    // updates global variables based on user input
    id = path;
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

    data.id = id;
    data.title = title;
    data.background = background;
    data.purpose = purpose;
    data.procedure = procedure;
    data.results.text = text;
    data.results.drawing = drawing;
    data.results.molecule = molecule;
    data.conclusion = conclusion;
    data.status =  status;

	//updates data variable into JSON string
     editEntry.data = JSON.stringify(data);

     console.log (data);


     //conditionals checking status
     if(data.status === ' Complete'){


 	    if (confirm('Are you sure you want your experiment status to be complete? Setting status to "complete" disables future edits.')) {
 		    $.ajax(editEntry).done(function(response) {
 			     data = response;
 	               console.log(data);
 	     		alert('Your experiment has been properly saved.');
 				window.location.href = `/${server_response.id}`;
 	          }).fail(function(error){
 	     		console.log(error);
 	     		alert('Something went wrong with the server. Try again later');
 	     	});
 	    } else {
              $('#status').text(' Mark as Complete');
         };

     };


     if(data.status === ' Mark as Complete'){

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
               //TODO: Upon saving automaticaly show fieldset "showStep6"
 	     }).fail(function(error){
 			console.log(error);
 			alert('Something went wrong with the server. Try again later');
 		});

     }else{
 	 //DO NOTHING
     };



});

/* ================================= VIEW REPORT AFTER SAVE ========================================*/

$('#view').on('click',function(event){
     event.preventDefault();
     alert('You must first save your experiment to view your report!');
     window.location.href = `/${server_response.id}`;
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
