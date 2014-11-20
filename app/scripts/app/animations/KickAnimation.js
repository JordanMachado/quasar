define(['underscore', 'TweenMax', 'TimeLineLite', 'PIXI', 'app/PixiPOV', 'app/Animation'], function(_, TweenMax, TimeLineLite, PIXI, PixiPOV, Animation) {

	function KickAnimation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
	};
	_.extend(KickAnimation.prototype, Animation.prototype, {
		graphics: new PIXI.Graphics(),
		tl: new TimelineLite(),
		buildShape: function() {
			this.shape = new PIXI.Text('POW', {
				font: "130px BebasNeue",
				fill: '#58ce52'
			});
			this.shape.position.x = 0;
			this.shape.position.y = this.shape.height - 25;
			this.shape.alpha = 1;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;

			PixiPOV.container.addChild(this.shape);

		},
		start: function() {
			this.reset();
			this.tl.to(this.shape, 0.1, {
				alpha: 1,
				ease: this.easeIn
			});
			this.tl.to(this.shape, 0.1, {
				alpha: 0,
				ease: this.easeOut
			}, '+=0.1');

		},
		reset: function() {
			this.tl.clear();
		}
	});

	return KickAnimation;
});