define(['underscore', 'app/Sample', 'app/animations/Synth3Animation'], function(_, Sample, Synth3Animation) {

	function Synth3(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Synth3Animation();
	};
	_.extend(Synth3.prototype, Sample.prototype);

	return Synth3;
});