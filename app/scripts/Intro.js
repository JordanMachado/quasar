define([],function() {
	var Intro = {
		canStart:false,
		start:function() {
			console.log('start');
		},
		onclickPlayBtn:function () {
			console.log('can start');
			Intro.canStart = true;
		}

	}

	return Intro;
}