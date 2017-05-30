$(document).ready( function() {

			    $("#filter-bar li").click(function(){
				    $("#filter-bar li").removeClass("active");
				    $(this).addClass("active");
				    $("#filter-bar").removeClass().addClass($(this).attr("data-target"));

			    });

			})


/* ================================= RESPONSIVE NAVIGATION =================================*/

    $('.handle').on('click', function(event) {
      $('nav ul').toggleClass('showing');
    });


    $('.show-list').click(function(){
    	$('.wrapper').addClass('list-mode');
    });

    $('.hide-list').click(function(){
    	$('.wrapper').removeClass('list-mode');
    });

/* ================================= =================================*/

// API GET reqeust
var localRequest = {
     "url": "http://localhost:8080/experiments",
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "GET",
};


/*
//Renders Experiments into DOM
function showPosts() {
     $.each(preSetPosts, function(index, value) {
          console.log(value.title);
          console.log(value.content);
          console.log(value.author);

          var experimentTemplate = '<h1 class="blog-title">' +
               value.title +
               '</h1>' +
               '<p class="lead">by <a href="#">' +
               value.author +
               '</a></p>' +
               '<hr>' +
               '<p class="blog-content lead">' +
               value.content +
               '</p>';

          $('#').append(blogTemplate);;

     });

}


//Renders Blog TITLES into DOM
function showTitle() {
     $.each(preSetPosts, function(index, value) {
          console.log(value.title);

          var blogTemplate = '<h1 class="blog-title">'
               + value.title
               +'</h1>'
               + '<button id="delete"type="submit" class="btn btn-primary" style="margin-right:10px;">'
               + 'Delete'
               + '</button>'
               + '<button id="edit"type="submit" class="btn btn-primary style="margin-right:10px;">'
               + 'Edit'
               + '</button>'
               + '<hr>';

          $('#listtitle').append(blogTemplate);;

     });

}


//document load
$(document).ready(function() {

     $.ajax(localRequest).done(function(response) {
          //updates preSetPosts with any new additional posts
          preSetPosts = eval(response);
          console.log(preSetPosts);
          showPosts();
     });

     $('#new').on('click', function() {
          $('#blogposts').addClass('hidden');
          $('#entry').removeClass('hidden');

     });

     $('#home').on('click', function() {
          $('#blogposts').removeClass('hidden');
          $('#entry').addClass('hidden');
     });



});
*/
