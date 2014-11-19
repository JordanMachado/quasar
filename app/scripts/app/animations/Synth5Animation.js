define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Synth5Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth5Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('Hein', {
				font: "50px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = 410;
			this.shape.position.y = 450;
			// this.shape.scale.x = .5;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			PixiPOV.container.addChild(this.shape);

		}
	});

	return Synth5Animation;
});