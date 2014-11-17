define(['underscore','app/samples/Sample','app/animations/Perc1Animation'],function(_,Sample,Perc1Animation){

	function Perc1(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc1Animation();
	};
	_.extend(Perc1.prototype,Sample.prototype);

	return Perc1;
});