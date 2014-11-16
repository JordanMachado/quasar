define(['underscore','app/samples/Sample','app/animations/HatAnimation'],function(_,Sample,HatAnimation){

	function Hat(properties) {
		Sample.apply(this, arguments);
		this.name = properties.name;
		this.timeline = properties.timeline;
		this.animation = new HatAnimation();
	};
	_.extend(Hat.prototype,Sample.prototype);

	return Hat;
});