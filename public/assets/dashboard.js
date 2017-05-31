/* =================================  API REQUEST=================================*/

// API GET reqeust
var localRequest = {
     "url": "http://localhost:8080/experiments",
     "dataType": "json",
     "contentType": "application/json; charset=utf-8",
     "method": "GET",
};

//captures API response
var preSetPosts;

//Renders Experiments into DOM
function showExperiments() {
     $.each(preSetPosts, function(index, value) {
          console.log(value.title);
          console.log(value.content);
          console.log(value.author);

          var experimentTemplate = '<tr>'+
		'<td class="organisationnumber">' +
               value.created +
               '</td>' +
               '<td class="organisationname">' +
               value.title +
               '</td>' +
               '<td class="actions">' +
               '<a href="?" class="edit-item" title="Edit">Edit </a>' +
               '<a href="?" class="remove-item" title="Remove">Remove </a>' +
               '</td>' +
			'</tr>';

          $('#mainTable').append(experimentTemplate);;

     });

}


/* ================================= Document Load =================================*/
$(document).ready(function() {

     $.ajax(localRequest).done(function(response) {
          //updates preSetPosts with any new additional posts
          preSetPosts = eval(response);
          console.log(preSetPosts);
          showExperiments();
     });


});


/* ================================= Filter Menu=================================*/

$("#filter-bar li").click(function(){
	$("#filter-bar li").removeClass("active");
	$(this).addClass("active");
	$("#filter-bar").removeClass().addClass($(this).attr("data-target"));
});


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

/* ================================= COUNTER ANIMATION =================================*/
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
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
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
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
