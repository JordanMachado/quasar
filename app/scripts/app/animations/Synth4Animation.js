define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Synth4Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth4Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('VAU', {font:"125px BebasNeue",fill:'#ecebeb'});
			this.shape.position.x = 340;
			this.shape.position.y = 140;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.rotation = 1.5707963267949;
			PixiPOV.container.addChild(this.shape);

		}
	});

	return Synth4Animation;
});