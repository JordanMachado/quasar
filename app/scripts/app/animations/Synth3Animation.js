define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Synth3Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth3Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('WOWE', {
				font: "200px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = this.shape.width / 2 + 2;
			this.shape.position.y = 360;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			PixiPOV.container.addChild(this.shape);

		}
	});

	return Synth3Animation;
});