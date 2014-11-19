define(['underscore', 'TweenMax', 'TimeLineLite', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, TimeLineLite, PIXI, PixiPOV, Animation) {

	function Perc1Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc1Animation.prototype, Animation.prototype, {
		tl: new TimelineLite(),
		buildShape: function() {
			this.shape = new PIXI.Text('TCHAAA', {
				font: "75px BebasNeue",
				fill: '#ecebeb'
			});
			this.shape.position.x = 235;
			this.shape.position.y = 0;
			this.shape.rotation = 1.5707963267949;

			PixiPOV.container.addChild(this.shape);

		},
		start: function() {

			this.reset();
			PixiPOV.showFilter(PixiPOV.filterEnum.INVERT, true);
			this.tl.to(this.shape.scale, this.duration, {
				x: 1,
				y: 1,
				ease: this.easeIn
			});
			this.tl.to(this.shape, this.duration, {
				alpha: 1,
				ease: this.easeIn
			}, '-=0.3');
			this.tl.to(this.shape, 0.4, {
				alpha: 0,
				ease: this.easeOut
			}, '+=' + this.duration);
			this.tl.to(this.shape.scale, 0.4, {
				x: 0,
				y: 0,
				ease: this.easeOut
			}, '-=0.4');
		},
		reset: function() {
			this.tl.clear();
		},


	});

	return Perc1Animation;
});