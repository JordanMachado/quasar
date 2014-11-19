define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Perc2Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.3;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc2Animation.prototype, Animation.prototype, {
		buildShape: function() {
			//tin up
			this.shape = new PIXI.Text('TIN', {
				font: "50px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = 0;
			this.shape.position.y = 0;
			this.shape.alpha = 1;

			PixiPOV.container.addChild(this.shape);

		}
	});

	return Perc2Animation;
});