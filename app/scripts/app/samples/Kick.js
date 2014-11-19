define(['underscore', 'app/Sample', 'app/animations/KickAnimation'], function(_, Sample, KickAnimation) {

	function Kick(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new KickAnimation();
	};
	_.extend(Kick.prototype, Sample.prototype);

	return Kick;
});