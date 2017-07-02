/* ================================= RESPONSIVE NAVIGATION =================================*/

$('.handle').on('click', function(event) {
     $('nav ul').toggleClass('showing');
});

$('.show-list').click(function() {
     $('.wrapper').addClass('list-mode');
});

$('.hide-list').click(function() {
     $('.wrapper').removeClass('list-mode');
});


/* ================================= RESPONSIVE NAVIGATION =================================*/

$('.handle').on('click', function(event) {
     $('nav ul').toggleClass('showing');
});


/* =================================  API REQUEST=================================*/

//global variable to capture data.length
var totalExperiments = 0;

var pendingExperiments = 0;

var completedExperiments = 0;

function getExperiments(callbackFn) {
     $.ajax({
          url: "/experiments",
          type: 'GET',
          dataType: 'json',

          success: function(data) {
               if (data) {
                    var results = data;
                    callbackFn(results);
               }
          }
     });
}

//Renders Experiments into accordion view
function displayExperiments(data) {
     console.log(data);

     //updates amount of experiments variable
     totalExperiments = data.length;

     //Adds total experiments to counter
     $('.counter_experiment').text(totalExperiments);


     const accordion = $('.gallery') //$('.accordion');
     if (data.length === 0) {
          accordion.html('<h2 class="no-results">You haven\'t recorded any experiments! Click "Add New Experiment" in the menu to get started.</h2>');
     } else {
          for (index in data) {
               accordion.append(
                    '<li class="gallery-item">' +
                    '<dt id="' + data[index].id + '" class="animated">' +
                    '<p class="experiment-title">' + data[index].title + '</p>' +
                    '<p class="experiment-date">' + data[index].created + '</p>' +
                    '<p class="experiment-status">' + 'Status: ' +
                    '<span class="stat">' +
                    data[index].status +
                    '</span>' +
                    '</p>' +
                    '</dt>' +
                    '<a href=/' + data[index].id + '><p class="experiment-info edit-button">View</p></a>' +
                    '</li>'
               );

               if(data[index].status === " Complete"){
                    completedExperiments++;
                    $('.counter_complete').text(completedExperiments);
               };
               if( data[index].status === "Pending"){
                    pendingExperiments++;
                    $('.counter_pending').text(pendingExperiments);
               };
          };
     };
};


function getAndDisplayExperiments() {
     //alert('getting and displaying');
     getExperiments(displayExperiments);

};

(function($) {
    var $window = $(window),
        $select = $('#add');

    $window.resize(function resize(event) {
        event.preventDefault();
        if ($window.width() < 514) {
            return $select.append(
                 '<a>'+
                 '<li id="see"> See Experiments </li>'+
                 '</a>'
            );
        }
    }).trigger('resize');

})(jQuery);

$('#see').on('click', function (event) {
    event.preventDefault();
    $("html,body").stop(true, false).animate({
       scrollTop:$("#grid").offset().top-30},"900",'swing');


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


     //renders correct numbers
     $('.counter').counterUp({
          delay: 10,
          time: 2000
     });
     $('.counter').addClass('animated fadeInDownBig');
     $('h3').addClass('animated fadeIn');


});
