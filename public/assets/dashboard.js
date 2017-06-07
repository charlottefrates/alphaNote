/* =================================  API REQUEST=================================*/

//global variable to capture data.length
var totalExperiments;

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
     totalExperiments = data.length;
     console.log(totalExperiments);
     //TODO: NOT UPDATING ATTRIBUTE DYNAMICALLY
     $('#experimentData').attr('data-to', totalExperiments);
     const accordion = $('.gallery') //$('.accordion');
     if (data.length === 0) {
          accordion.html('<h2 class="no-results">You haven\'t recorded any experiments! Click "Add New Experiment" in the menu to get started.</h2>');
     } else {
          for (index in data) {
               accordion.append(
                    '<li class="gallery-item">' +
                    '<dt id="' + data[index].id + '" class="animated">' +
                    '<p class="experiment-title">' + data[index].title + '</p>' +
                    '<p class="experiment-date">'+ data[index].created  + '</p>'+
                    '<p class="experiment-status">'+'Status: ' +
                    '<span class="statusColor">'+
                    data[index].status  +
                    '</span>'+
                    '</p>'+
                    '</dt>' +
                    '<a href=/' + data[index].id + '><p class="experiment-info edit-button">View</p></a>' +
                    '</li>'
                    );
               if(data[index].status === "complete"){
                         $('.statusColor').addClass('green');
                    }
               if(data[index].status === "pending"){
                         $('.statusColor').addClass('red');
                    }
               };


          };





     };


function getAndDisplayExperiments() {
     getExperiments(displayExperiments);
}

/* ================================= IIFE =================================*/

$(function() {
     getAndDisplayExperiments();
});



/* ================================= Filter Menu=================================*/

$("#filter-bar li").click(function() {
     $("#filter-bar li").removeClass("active");
     $(this).addClass("active");
     $("#filter-bar").removeClass().addClass($(this).attr("data-target"));
});


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

/* ================================= COUNTER ANIMATION =================================*/
(function($) {
     $.fn.countTo = function(options) {
          options = options || {};

          return $(this).each(function() {
               // set options for current element
               var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
               }, options);

               // how many times to update the value, and how much to increment the value on each update
               var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

               // references & variables that will change with each update
               var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

               $self.data('countTo', data);

               // if an existing interval can be found, clear it first
               if (data.interval) {
                    clearInterval(data.interval);
               }
               data.interval = setInterval(updateTimer, settings.refreshInterval);

               // initialize the element with the starting value
               render(value);

               function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof(settings.onUpdate) == 'function') {
                         settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                         // remove the interval
                         $self.removeData('countTo');
                         clearInterval(data.interval);
                         value = settings.to;

                         if (typeof(settings.onComplete) == 'function') {
                              settings.onComplete.call(self, value);
                         }
                    }
               }

               function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.html(formattedValue);
               }
          });
     };

     $.fn.countTo.defaults = {
          from: 0, // the number the element should start at
          to: 0, // the number the element should end at
          speed: 1000, // how long it should take to count between the target numbers
          refreshInterval: 100, // how often the element should be updated
          decimals: 0, // the number of decimal places to show
          formatter: formatter, // handler for formatting the value before rendering
          onUpdate: null, // callback method for every time the element is updated
          onComplete: null // callback method for when the element finishes updating
     };

     function formatter(value, settings) {
          return value.toFixed(settings.decimals);
     }
}(jQuery));

jQuery(function($) {
     // custom formatting example
     $('.count-number').data('countToOptions', {
          formatter: function(value, options) {
               return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
          }
     });

     // start all the timers
     $('.timer').each(count);

     function count(options) {
          var $this = $(this);
          options = $.extend({}, options || {}, $this.data('countToOptions') || {});
          $this.countTo(options);
     }
});
