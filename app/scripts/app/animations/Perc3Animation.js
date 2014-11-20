define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Perc3Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.2;
		this.easeIn = Circ.easeIn;
		this.easeOut = Circ.easeOut;
	};
	_.extend(Perc3Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('Plop\nLoop\nOplo', {
				font: "70px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = 440;
			this.shape.position.y = 0;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;

			PixiPOV.container.addChild(this.shape);
		}
	});

	return Perc3Animation;
});