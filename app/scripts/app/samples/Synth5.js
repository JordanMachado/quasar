define(['underscore','app/samples/Sample','app/animations/Synth5Animation'],function(_,Sample,Synth5Animation){

	function Synth5(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Synth5Animation();
	};
	_.extend(Synth5.prototype,Sample.prototype);

	return Synth5;
});