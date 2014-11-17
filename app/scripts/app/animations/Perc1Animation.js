define(['underscore','TweenMax','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, PIXI, PixiPOV, Animation){

	function Perc1Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc1Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('TCHAAAAH', {font:"50px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight/8;
			this.shape.alpha = 0;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 0;
			this.shape.scale.y = 0;
			
			//console.log(this.shape)

			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			var that = this;
			TweenMax.to(this.shape.scale,this.duration,{x:1,y:1,ease:this.easeIn});
			TweenMax.to(this.shape,this.duration,{alpha:1,ease:this.easeIn,onComplete:function(){
				that.reset();
			}});
		},
		reset:function() {
			TweenMax.to(this.shape,0.4,{alpha:0,ease:this.easeOut});
			TweenMax.to(this.shape.scale,0.4,{x:0,y:0,ease:this.easeOut});
		},


	});

	return Perc1Animation;
});