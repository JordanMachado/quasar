define(['underscore','app/samples/Sample','app/animations/ClapAnimation'],function(_,Sample,ClapAnimation){


	function Clap(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new ClapAnimation();
	};
	_.extend(Clap.prototype,Sample.prototype);

	return Clap;
});