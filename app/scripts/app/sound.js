define(['TweenMax','app/Outro'],function(TweenMax, Outro) {

	function Sound() {
		this.isPlaying = false;
		var audioCtx = new (window.AudioContext || window.webkitAudioContext);
		this.audio =  new Audio('sounds/Fullsong.mp3');
		this.audio.addEventListener("ended",this.ended.bind(this));
		this.audio.addEventListener('canplaythrough', this.ready.bind(this), false);
		var analyser = audioCtx.createAnalyser();
		var source = audioCtx.createMediaElementSource(this.audio); 
		source.connect(analyser);
		analyser.connect(audioCtx.destination);
		this.audio.playbackRate = 1.7;
		this.audio.volume = 0;
		this.restart = true;

		
		
	};
	Sound.prototype.ready = function() {
		this.play();
		TweenMax.to(this.audio,2.5,{volume:1})
	};
	Sound.prototype.play = function() {
		console.log('%c Play song ','background:black;color:white;font-size:14px');
		this.audio.play();
		this.isPlaying = true;
	};
	Sound.prototype.stop = function() {
		this.audio.stop();
		this.isPlaying = false;
	};
	Sound.prototype.getCurrentTime = function() {
		return this.audio.currentTime.toFixed(1);
	};
	Sound.prototype.ended = function() {
		console.log('ended');
		Outro.init();
		this.isPlaying = false;
	};
	Sound.prototype.loopIntro = function() {
		var that = this;
		if(this.audio.currentTime>20 && this.restart) {
			this.restart = false;
			TweenMax.to(this.audio,2.5,{volume:0,onComplete:function(){
				that.audio.currentTime = 0;
				that.restart = true;
			}})
			
			
		}
	};
	return Sound;
});