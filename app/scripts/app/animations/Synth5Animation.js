define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Synth5Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.2;
		this.easeIn = Bounce.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth5Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('Hein !', {
				font: "140px BebasNeue",
				fill: '#3a7ce8'
			});
			this.shape.position.x = 440;
			this.shape.position.y = 310;
			this.shape.rotation = 1.5707963267949;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			PixiPOV.container.addChild(this.shape);

		}
	});

	return Synth5Animation;
});