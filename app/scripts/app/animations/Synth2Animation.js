define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Synth2Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.4;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Synth2Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('WWWARVOO', {font:"50px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight/2;
			this.shape.alpha = 0;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
			console.log('perc7')
		},
		reset:function() {
			TweenMax.to(this.shape,0.4,{alpha:0,ease:this.easeOut});
			TweenMax.to(this.shape.scale,0.4,{x:0,y:0,ease:this.easeOut});
		},


	});

	return Synth2Animation;
});