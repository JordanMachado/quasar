define([],function() {
	'use strict';

	function Sample() {
		this.name = '';
		this.animation = {};
		this.timeline = [];
		this.currentStep = 0;
		this.previousStep = -1;
	};
	Sample.prototype.getTimeCodeCurrentStep = function() {
		return this.timeline[this.currentStep].toFixed(1);
	};
	Sample.prototype.isLastStep = function(){
		return (this.currentStep == this.timeline.length-1) ? true:false;
	}
	Sample.prototype.nextStep = function() {
		this.previousStep = this.currentStep;

		if(this.timeline[this.currentStep+1]) {
			this.currentStep = this.currentStep+1;
		}
	};
	Sample.prototype.launchAnimation = function(currentTime) {
		if(this.getTimeCodeCurrentStep() == currentTime && this.currentStep != this.previousStep) {	
				this.animation.start();
				window.document.title = this.name;
				this.nextStep();
		}
	};

	return Sample;
});