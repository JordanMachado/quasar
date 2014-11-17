define(['underscore','app/samples/Sample','app/animations/Synth2Animation'],function(_,Sample,Synth2Animation){

	function Synth2(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Synth2Animation();
	};
	_.extend(Synth2.prototype,Sample.prototype);

	return Synth2;
});