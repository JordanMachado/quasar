define(['jquery', 'TweenMax', 'TimeLineLite'], function($, TweenMax, TimeLineLite) {

	/*
	 * Introduction is the object wich manage the Introduction part of the application
	 *   PROPERTIES:
	 *		tl (TimeLineLite)
	 *	 METHODS:
	 *	 	initialize
	 *	 	startAnimation
	 *	 	onclickPlayBtn
	 */
	var Intro = {
		tl: new TimeLineLite(),
		/*
		 * Method called in first for initializing listerner and call the startAnimation Method
		 */
		initialize: function() {
			console.log('%c Intro ', 'background:black;color:white;font-size:14px');

			// listener
			$('#intro button').click(function() {
				Intro.onclickPlayBtn();
			});

			Intro.startAnimation();
		},
		/*
		 * Method wich create the timeline animation of the Introduction
		 */
		startAnimation: function() {
			Intro.tl.to($('#intro hr:first'), 0.5, {
				autoAlpha: 1,
				y: 0
			});
			Intro.tl.to([$('#intro h1'), $('#intro h2')], 1, {
				autoAlpha: 1,
				scale: 1,
				y: 0
			}, '-=0.1');
			Intro.tl.to($('#intro hr'), 0.5, {
				autoAlpha: 1,
				y: 0
			}, '-=0.6');
			Intro.tl.to($('#intro p'), 0.5, {
				autoAlpha: 1,
				y: 0
			});
			Intro.tl.to($('#intro button'), 0.3, {
				autoAlpha: 1,
				scale: 1
			}, '-=0.2');

		},
		/*
		 * Method wich handle the click of the Introduction's button
		 */
		onclickPlayBtn: function() {
			// create custom event 'startExperience'
			var startEvent = new CustomEvent('StartExperience');
			// animation out for the introduction
			Intro.tl.timeScale(2).reverse();
			// create listener for dispatch the StartExperience event when the animation is complete
			Intro.tl.eventCallback("onReverseComplete", function() {
				TweenMax.to($('#intro'), 0.5, {
					autoAlpha: 0
				});
				window.dispatchEvent(startEvent);
			});

		}
	}

	return Intro;
});