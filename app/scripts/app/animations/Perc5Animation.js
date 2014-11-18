define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Perc5Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.2;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc5Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('TEU', {font:"110px BebasNeue",fill:'#ecebeb'});
			this.shape.position.x = 50;
			this.shape.position.y = -5;
			this.shape.alpha = 1;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.container.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
			// console.log('kick')
		},


	});

	return Perc5Animation;
});