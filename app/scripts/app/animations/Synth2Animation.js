define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Synth2Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.4;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth2Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('BROuw', {
				font: "135px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = this.shape.width / 2;
			this.shape.position.y = 235;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			PixiPOV.container.addChild(this.shape);

		},
		start: function() {
			Animation.prototype.start.call(this);
			console.log('perc7')
		},
		reset: function() {
			TweenMax.to(this.shape, 0.4, {
				alpha: 0,
				ease: this.easeOut
			});
			TweenMax.to(this.shape.scale, 0.4, {
				x: 0,
				y: 0,
				ease: this.easeOut
			});
		},


	});

	return Synth2Animation;
});