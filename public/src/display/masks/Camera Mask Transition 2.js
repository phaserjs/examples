// main game logic object
var TestScene = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:

	function GameScene ()
	{
		Phaser.Scene.call(this, { key: "gamescene" });
	},

	preload: function ()
	{
		this.load.image('phaser2', 'assets/sprites/phaser2.png');

		this.load.image('backdrop', 'assets/pics/platformer-backdrop.png');
		this.load.image('dude', 'assets/sprites/phaser-dude.png');

		this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
	},

	create: function ()
	{
		// create some background with text and some sprites
		var bg = this.add.image(400, 300, 'backdrop').setScale(2.5, 2.5);

		var text = this.add.bitmapText(400, 300, 'atari', '', 38).setOrigin(0.5).setCenterAlign().setInteractive();
		text.setText('Mission 1\nGet ready!');

		for (var i = 0; i < 10; i++) {
			var x = Phaser.Math.RND.between(10, this.cameras.main.width-10);
			var y = Phaser.Math.RND.between(10, this.cameras.main.width-10);
			this.add.image(x, y, 'dude'); // .setScale(2.0, 2.0);
		};

		// the logo to use as a maskm, 
		this.logo = this.add.image(400, 300, 'phaser2').setVisible(false);

		this.shape1 = this.make.graphics();
		var mask1 = this.shape1.createBitmapMask(this.logo);

		this.cameras.main.setMask(mask1);

		// create object for use with tween
		this.transition = {"counter": 0};

		// tween counter variable and set onUpdate function
		this.tweens.add({
			targets: this.transition,
			counter: 4.8,
			callbackScope: this,
			onUpdate: this.updateTransition,
			ease: 'Sine.easeInOut',
			yoyo: true,
			repeat: -1,
			duration: 2000
		});
	},

	update: function (time, delta)
	{
	},
	
	updateTransition: function ()
	{
		// this function is called when tweened value updates
		console.log("updateTransition");

		// scale logo
		this.logo.setScale(this.transition.counter);
	}
});


var config = {
	type: Phaser.WEBGL,
	width: 800,
	height: 600,
	backgroundColor: '#2d2d2d',
	parent: 'phaser-example',
	scene: [ TestScene ]
};

var game = new Phaser.Game(config);
