define(['underscore', 'app/Sample', 'app/animations/Perc3Animation'], function(_, Sample, Perc3Animation) {

	function Perc3(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc3Animation();
	};
	_.extend(Perc3.prototype, Sample.prototype);

	return Perc3;
});