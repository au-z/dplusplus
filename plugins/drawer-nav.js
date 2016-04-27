/*!
 * NavDrawer
 */
(function($) {

	$.fn.navDrawer = function(opts) {
	
		// default configuration
		var config = $.extend({}, {
			opt1: null
		}, opts);
	
		// main function
		function init(e) {

		}

		// initialize every element
		this.each(function() {
			init($(this));
		});

		return this;
	};

	// start
	$(function() {
		$(".drawer").navDrawer();
	});

})(jQuery);