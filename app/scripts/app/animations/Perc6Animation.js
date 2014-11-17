define(['underscore','TweenMax','TimeLineLite','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, TimeLineLite, PIXI, PixiPOV, Animation){

	function Perc6Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.5;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc6Animation.prototype,Animation.prototype,{
		tl:new TimelineLite(),
		buildShape: function() {
			this.shape = new PIXI.Text('TCHIII', {font:"50px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight- window.innerHeight/8;
			this.shape.alpha = 0;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;


			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			console.log('perc6')

			this.reset();
			
			this.tl.to(this.shape, 0.2, {alpha:1,ease:this.easeIn});
			this.tl.to(this.shape.scale, 0.2, {x:1.5,y:1.5,ease:this.easeIn},'-=0.2');
			this.tl.to(this.shape.scale, 0.2, {x:1,y:1},'+=0.2');
			this.tl.to(this.shape.scale, 0.2, {x:0.5,y:0.5,ease:this.easeOut},'+=0.2');
			this.tl.to(this.shape, 0.2, {alpha:0,ease:this.easeOut},'-=0.1');
			
		},
		reset:function() {
			this.tl.clear();
		}
	});

	return Perc6Animation;
});