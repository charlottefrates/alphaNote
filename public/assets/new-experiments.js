//global variable
var category,title,background,purpose,procedure,text,drawing,molecule,conclusion;

//variable that holds blog entries
var data = {
    results:{},
};



//API POST request
var newLocalEntry = {
     "url": "http://localhost:8080/experiments/new",
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "POST",
     "data": JSON.stringify(data)
};


//API EDIT request
var deleteLocalEntry = {
    "url": "http://localhost:8080/experiments",
    "dataType": "json",
    "contentType": "application/json; charset=utf-8",
    "method": "PUT",
}

//API DELETE request
var deleteLocalEntry = {
    "url": "http://localhost:8080/experiments",
    "dataType": "json",
    "contentType": "application/json; charset=utf-8",
    "method": "DELETE",
}



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


$('#submit').on('click',function(event){
    event.preventDefault();

    // updates global variables based on user input
    category = $('#category option:selected').val();
    title = $('#title').val();
    background = $('#background').val();
    purpose = $('#purpose').val();
    procedure = $('#procedure').val();
    text = tinymce.get("texteditor").getContent();
    drawing = ($('#doodleCanvas')[0]).toDataURL('image/png',1.0);
    molecule = chemwriter.components['editor'].getMolfile();
    conclusion = $('#conclusion').val();

    // updates data variable with combined user input values

    data.category = category;
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


    /*
    $.ajax(newLocalEntry).done(function(response) {
          console.log(response);
     });
     */

});


$(document).ready(function(){


	//----------Select the first tab and div by default

	$('#vertical_tab_nav > ul > li > a').eq(0).addClass( "selected" );
	$('#vertical_tab_nav > div > article').eq(0).css('display','block');


	//---------- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function

		$('#vertical_tab_nav > ul').click(function(e){

      if($(e.target).is("a")){

        /*Handle Tab Nav*/
        $('#vertical_tab_nav > ul > li > a').removeClass( "selected");
        $(e.target).addClass( "selected");

        /*Handles Tab Content*/
        var clicked_index = $("a",this).index(e.target);
        $('#vertical_tab_nav > div > article').css('display','none');
        $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();

      }

        $(this).blur();
        return false;

		});


});
