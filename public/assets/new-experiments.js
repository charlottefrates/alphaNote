//global variable
var category,title,purpose,procedure,text,drawing,molecule,conclusion;

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
    category = "";
    title = "";
    purpose = "";
    procedure = "";
    text = "";
    drawing = "";
    molecule = "";
    conclusion = "";

    // updates data variable with combined user input values

    data.category = category;
    data.title = title;
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
