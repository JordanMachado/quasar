define(['underscore','app/samples/Sample','app/animations/Perc4Animation'],function(_,Sample,Perc4Animation){

	function Perc4(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc4Animation();
	};
	_.extend(Perc4.prototype,Sample.prototype);

	return Perc4;
});