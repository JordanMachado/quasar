define(['jquery','TweenMax','TimeLineLite'],function($, TweenMax, TimeLineLite) {
	var Intro = {		
		tl:new TimeLineLite(),
		init:function() {
			console.log('%c Intro ','background:black;color:white;font-size:14px');
			$('#intro button').click(function(){
				Intro.onclickPlayBtn();
			});
		
			Intro.start();
		},
		start:function() {
			Intro.tl.to($('#intro hr:first'),0.5,{autoAlpha:1,y:0});
			Intro.tl.to([$('#intro h1'),$('#intro h2')],1,{autoAlpha:1,scale:1,y:0},'-=0.1');
			Intro.tl.to($('#intro hr'),0.5,{autoAlpha:1,y:0},'-=0.6');
			Intro.tl.to($('#intro p'),0.5,{autoAlpha:1,y:0});
			Intro.tl.to($('#intro button'),0.5,{autoAlpha:1,scale:1},'+=0.2');
			
		},

		onclickPlayBtn:function () {
			var startEvent = new CustomEvent('startEvent');

			Intro.tl.timeScale(2).reverse();
			Intro.tl.eventCallback("onReverseComplete",function(){
				TweenMax.to($('#intro'),0.5,{autoAlpha:0});
				window.dispatchEvent(startEvent);
			});
			
			
			
			
			
		}


	}

	return Intro;
});