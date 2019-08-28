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
		var bg = this.add.image(400, 300, 'backdrop').setScale(2.5, 2.5);

		var text = this.add.bitmapText(400, 300, 'atari', '', 38).setOrigin(0.5).setCenterAlign().setInteractive();

		text.setText('Mission 1\nGet ready!');

		for (var i = 0; i < 10; i++) {
				var x = Phaser.Math.RND.between(10, this.cameras.main.width-10);
				var y = Phaser.Math.RND.between(10, this.cameras.main.width-10);
				this.add.image(x, y, 'dude'); // .setScale(2.0, 2.0);
		};


		this.shape1 = this.make.graphics().fillStyle(0x00ff00).fillCircle(400, 300, 100);

		var mask1 = this.shape1.createGeometryMask();

		this.cameras.main.setMask(mask1);

		this.transition = {"counter": 0};
        
		this.tweens.add({
			targets: this.transition,
			counter: 500,
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
	
    updateTransition: function (a, b, c, d)
    {
		// controls.update(delta);
		console.log("updateTransition");
		// draw circle shape
		//this.shape1.clear();
		//this.shape1.fillStyle(0x00ff00).fillCircle(400, 300, this.transition.counter);

		// draw star shape
		var outerRadius = this.transition.counter * 2;
		var innerRadius = this.transition.counter;
		var cx = 400;
		var cy = 300;
		
		this.shape1.clear();
		var rot = Math.PI / 2 * 3;
		var x = cx;
		var y = cy;
		var step = Math.PI / 5;
		//this.shape1.lineStyle(10, 0xffffff, 1.0);
		this.shape1.fillStyle(0xffffff, 1.0);
		this.shape1.beginPath();
		this.shape1.moveTo(cx, cy - outerRadius);
		for (i = 0; i < 5; i++) {
			x = cx + Math.cos(rot) * outerRadius;
			y = cy + Math.sin(rot) * outerRadius;
			this.shape1.lineTo(x, y);
			rot += step;

			x = cx + Math.cos(rot) * innerRadius;
			y = cy + Math.sin(rot) * innerRadius;
			this.shape1.lineTo(x, y);
			rot += step;
		}
		this.shape1.lineTo(cx, cy - outerRadius);
		this.shape1.closePath();
		this.shape1.fillPath();
		this.shape1.strokePath();
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
