define(['underscore', 'app/Sample', 'app/animations/Perc6Animation'], function(_, Sample, Perc6Animation) {

	function Perc6(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc6Animation();
	};
	_.extend(Perc6.prototype, Sample.prototype);

	return Perc6;
});