define(['underscore', 'TweenMax', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, PIXI, PixiPOV, Animation) {

	function Synth1Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth1Animation.prototype, Animation.prototype, {
		buildShape: function() {
			this.shape = new PIXI.Text('Wop', {
				font: "70px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = 340;
			this.shape.position.y = 250;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;

			//console.log(this.shape)

			PixiPOV.container.addChild(this.shape);

		},
		start: function() {
			Animation.prototype.start.call(this);
			console.log('perc7')
		},


	});

	return Synth1Animation;
});