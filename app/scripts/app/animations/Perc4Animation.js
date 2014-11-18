define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Perc4Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.3;
		this.easeIn = Expo.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc4Animation.prototype,Animation.prototype,{
		buildShape: function() {
			//tin down
			this.shape = new PIXI.Text('TIN', {font:"50px BebasNeue",fill:'#ecebeb'});
			this.shape.position.x = 0;
			this.shape.position.y =  this.shape.height;
			this.shape.alpha = 1;
			//this.shape.rotation= 3.14159265;

			PixiPOV.container.addChild(this.shape);
		}
	});

	return Perc4Animation;
});