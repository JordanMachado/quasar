define(['jquery','TweenMax','TimeLineLite'],function($, TweenMax, TimeLineLite) {
	var Outro = {		
		tl:new TimeLineLite(),
		init:function() {
			console.log('%c Outro ','background:black;color:white;font-size:14px');
			Outro.start();
		},
		start:function() {
			Outro.tl.to($('#outro'),0.5,{autoAlpha:1});
			Outro.tl.to($('#outro hr:first'),0.5,{autoAlpha:1,y:0});
			Outro.tl.to([$('#outro h1'),$('#outro h2')],1,{autoAlpha:1,scale:1,y:0},'-=0.1');
			Outro.tl.to($('#outro hr'),0.5,{autoAlpha:1,y:0},'-=0.6');
			Outro.tl.to($('#outro p'),0.5,{autoAlpha:1,y:0});
		}
	}

	return Outro;
});