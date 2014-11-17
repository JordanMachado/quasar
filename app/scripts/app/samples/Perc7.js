define(['underscore','app/samples/Sample','app/animations/Perc7Animation'],function(_,Sample,Perc7Animation){

	function Perc7(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc7Animation();
	};
	_.extend(Perc7.prototype,Sample.prototype);

	return Perc7;
});