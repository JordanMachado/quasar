define(['underscore','app/samples/Sample','app/animations/Synth4Animation'],function(_,Sample,Synth4Animation){

	function Synth4(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Synth4Animation();
	};
	_.extend(Synth4.prototype,Sample.prototype);

	return Synth4;
});