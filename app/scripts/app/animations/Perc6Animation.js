define(['underscore','TweenMax','TimeLineLite','PIXI','app/PixiPOV','app/animations/Animation'],function(_, TweenMax, TimeLineLite, PIXI, PixiPOV, Animation){

	function Perc6Animation(properties) {
		Animation.apply(this, arguments);
		this.duration = 0.1;
		this.easeIn = Quint.easeIn;
		this.easeOut = Quad.easeOut;
	};
	_.extend(Perc6Animation.prototype,Animation.prototype,{
		buildShape: function() {
			this.shape = new PIXI.Text('TCHIII', {font:"50px Arial",fill:'white'});
			this.shape.position.x = window.innerWidth/2;
			this.shape.position.y = window.innerHeight- window.innerHeight/8;
			this.shape.alpha = 1;
			this.shape.anchor.x = 0.5;
			this.shape.anchor.y = 0.5;
			this.shape.scale.x = 1;
			this.shape.scale.y = 1;
			
			//console.log(this.shape)

			PixiPOV.stage.addChild(this.shape);

		},
		start:function() {
			Animation.prototype.start.call(this);
			console.log('perc6')
			var tl = new TimelineLite();
			tl.to(this.shape, this.duration, {alpha:1});
			tl.to(this.shape.scale, this.duration, {x:1,y:1},'-=0.5');
			tl.to(this.shape.scale, this.duration, {x:0.5,y:0.5},'-=0.2');
			tl.to(this.shape, this.duration, {alpha:0},'-=0.2');
			tl.to(this.shape, this.duration, {alpha:1},'-=0.4');
		},


	});

	return Perc6Animation;
});