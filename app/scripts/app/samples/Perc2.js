define(['underscore', 'app/Sample', 'app/animations/Perc2Animation'], function(_, Sample, Perc2Animation) {

	function Perc2(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc2Animation();
	};
	_.extend(Perc2.prototype, Sample.prototype);

	return Perc2;
});