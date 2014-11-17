define(['underscore','app/samples/Sample','app/animations/Perc5Animation'],function(_,Sample,Perc5Animation){

	function Perc5(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new Perc5Animation();
	};
	_.extend(Perc5.prototype,Sample.prototype);

	return Perc5;
});