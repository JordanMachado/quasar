define([], function() {
	/*
	 * Sample super Class
	 * This class is the super class of the other samples so all have got the same pattern
	 *  PROPERTIES:
	 *  	name (string)
	 *  	animation (object)
	 *  	timeline (array)
	 *  	currentStep (number)
	 *  	previousStep (number)
	 *	 METHODS:
	 *	 	getTimeCodeCurrentStep
	 *	 	isLastStep
	 *	 	nextStep
	 *	 	launchAnimation
	 */
	function Sample() {
		this.name = '';
		this.animation = {};
		this.timeline = [];
		this.currentStep = 0;
		this.previousStep = -1;
	};
	/*
	 * Method witch return the current the current step of the timeline with precision of 0.1
	 */
	Sample.prototype.getTimeCodeCurrentStep = function() {
		return this.timeline[this.currentStep].toFixed(1);
	};
	/*
	 * Method witch chek if it is the lastStep
	 */
	Sample.prototype.isLastStep = function() {
		return (this.currentStep == this.timeline.length - 1) ? true : false;
	};
	/*
	 * Method witch update the currentStep to the next step and set the previous step
	 */
	Sample.prototype.nextStep = function() {
		this.previousStep = this.currentStep;

		if (this.timeline[this.currentStep + 1]) {
			this.currentStep = this.currentStep + 1;
		}
	};
	/*
	 * Method for launch an animation if the currentTime is equal to the currentStep
	 */
	Sample.prototype.launchAnimation = function(currentTime) {
		if (this.getTimeCodeCurrentStep() == currentTime && this.currentStep != this.previousStep) {
			// start animation
			this.animation.start();
			window.document.title = this.name;
			this.nextStep();
		}
	};

	return Sample;
});