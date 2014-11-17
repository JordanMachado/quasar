define(['underscore','app/samples/Sample','app/animations/Synth1Animation'],function(_,Sample,Synth1Animation){

	function Synth1(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Synth1Animation();
	};
	_.extend(Synth1.prototype,Sample.prototype);

	return Synth1;
});