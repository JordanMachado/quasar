define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Perc3Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc3Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('PULOOP', {font:"50px BebasNeue",fill:'#ecebeb'});
			this.shape.position.x = 400;
			this.shape.position.y = 390;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
	
			
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.container.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
			console.log('kick')
		},


	});

	return Perc3Animation;
});