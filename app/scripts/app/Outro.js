define(['jquery', 'TweenMax', 'TimeLineLite'], function($, TweenMax, TimeLineLite) {

	/*
	 * Outro is the object wich manage the Outro part of the application
	 *   PROPERTIES:
	 *		tl (TimeLineLite)
	 *	 METHODS:
	 *	 	initialize
	 *	 	startAnimation
	 */
	var Outro = {
		tl: new TimeLineLite(),
		initialize: function() {
			console.log('%c Outro ', 'background:black;color:white;font-size:14px');
			Outro.startAnimation();
		},
		/*
		 * Method wich create the timeline animation of the Outro
		 */
		startAnimation: function() {
			Outro.tl.to($('#outro'), 0.5, {
				autoAlpha: 1
			});
			Outro.tl.to($('#outro hr:first'), 0.5, {
				autoAlpha: 1,
				y: 0
			});
			Outro.tl.to([$('#outro h1'), $('#outro h2')], 1, {
				autoAlpha: 1,
				scale: 1,
				y: 0
			}, '-=0.1');
			Outro.tl.to($('#outro hr'), 0.5, {
				autoAlpha: 1,
				y: 0
			}, '-=0.6');
			Outro.tl.to($('#outro p'), 0.5, {
				autoAlpha: 1,
				y: 0
			});
		}
	}

	return Outro;
});