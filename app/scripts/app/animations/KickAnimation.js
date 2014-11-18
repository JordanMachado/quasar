define(['underscore','TweenMax','TimeLineLite','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, TimeLineLite, PIXI, PixiPOV, Animation){

	function KickAnimation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(KickAnimation.prototype,Animation.prototype,{
		graphics:new PIXI.Graphics(),
		tl:new TimelineLite(),
		buildShape: function() {
			this.shape = new PIXI.Text('POW', {font:"130px BebasNeue",fill:'#58ce52'});
			this.shape.position.x = 0;
			this.shape.position.y = this.shape.height - 25;
			this.shape.alpha = 1;
			// this.shape.anchor.x = 0.5;
			// this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;

			
			
			// this.graphics.beginFill(0xFFFFFF);
			// this.graphics.lineStyle(5, 0x000000); 
			// this.graphics.drawCircle(0, 0, 300);
			// this.graphics.position.x = window.innerWidth/2;
			// this.graphics.position.y = window.innerHeight/2;
			// this.graphics.scale.x = 0;
			// this.graphics.scale.y = 0;
			// this.graphics.alpha = 0;
			// PixiPOV.stage.addChild(this.graphics);
			PixiPOV.container.addChild(this.shape);

		},
		start:function() {
			//Animation.prototype.start.call(this);
			// console.log('kick')
			// this.reset();
			// var that = this;
			// PixiPOV.showFilter(PixiPOV.filterEnum.INVERT,true);
			// this.tl.to(this.graphics.scale,0.1,{x:1,y:1,ease:this.easeIn});
			// this.tl.to(this.graphics,0.1,{alpha:1,ease:this.easeIn},'-=0.1');
			// this.tl.to(this.graphics.scale,0.1,{x:0,y:0,ease:this.easeIn},'+=0.1');
			// this.tl.to(this.graphics,0.1,{alpha:0,ease:this.easeIn,onComplete:function(){
			// 	KickAnimation.prototype.reset.call(that);
			// }},'-=0.1');
			this.reset();
			//this.tl.to(this.shape.scale,this.duration,{x:1,y:1,ease:this.easeIn});
			this.tl.to(this.shape,0.1,{alpha:1,ease:this.easeIn});
			this.tl.to(this.shape,0.1,{alpha:0,ease:this.easeOut},'+=0.1');
			
		},
		reset:function() {
			console.log('reset anim');
			this.tl.clear();
			//PixiPOV.showFilter(PixiPOV.filterEnum.INVERT,false);
			
			
		}


	});

	return KickAnimation;
});