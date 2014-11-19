define(['TweenMax', 'app/Outro'], function(TweenMax, Outro) {
	/* 
     * Sound Class
     *  PROPERTIES:
     *      isPlaying        (boolean)
     *      audio           (Audio)
     *      restart         (boolean)
     *
     *  METHODS:
     *      ready
     *      play
     *      stop
     *      getCurrentTime
     *      ended
     *      loopIntro
     */
	function Sound() {

		this.isPlaying = false;
		this.restart = true;
		var audioCtx = new(window.AudioContext || window.webkitAudioContext);
		this.audio = new Audio('sounds/Fullsong.mp3');
		// audio's listeners
		this.audio.addEventListener("ended", this.ended.bind(this));
		this.audio.addEventListener('canplaythrough', this.ready.bind(this), false);
		var analyser = audioCtx.createAnalyser();
		var source = audioCtx.createMediaElementSource(this.audio);
		source.connect(analyser);
		analyser.connect(audioCtx.destination);

		// setup audio 
		this.audio.playbackRate = 1.7;
		this.audio.volume = 0;

	};
	/* 
	 * Method called when the sound can be played
	 */
	Sound.prototype.ready = function() {
		this.play();
		//TweenMax.to(this.audio,2.5,{volume:1})
	};
	/*
	 * Method wich play the sound with a fadeIn
	 */
	Sound.prototype.play = function() {
		console.log('%c Play song ', 'background:black;color:white;font-size:14px');
		this.audio.play();
		this.isPlaying = true;
	};
	/*
	 * Method wich stop the sound
	 */
	Sound.prototype.stop = function() {
		this.audio.stop();
		this.isPlaying = false;
	};
	Sound.prototype.getCurrentTime = function() {
		return this.audio.currentTime.toFixed(1);
	};
	/*
	 * Method called when sound is terminated
	 */
	Sound.prototype.ended = function() {
		Outro.initialize();
		this.isPlaying = false;
	};
	/*
	 * Method for apply restart the sound at 20sec (fake loop)
	 * Jonathan sorry pour cette saleté =)
	 */
	Sound.prototype.loopIntro = function() {
		var that = this;
		if (this.audio.currentTime > 20 && this.restart) {
			this.restart = false;
			// fadeOut the volume
			TweenMax.to(this.audio, 2.5, {
				volume: 0,
				onComplete: function() {
					// restart audio
					that.audio.currentTime = 0;
					that.restart = true;
				}
			})
		}
	};
	return Sound;
});