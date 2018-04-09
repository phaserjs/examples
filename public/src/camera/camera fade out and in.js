var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('robota', 'assets/pics/robota-uxo-by-made-of-bomb.jpg');
    this.load.image('neuromancer', 'assets/pics/neuromancer.jpg');
}

function runFadeIn (camera)
{
    console.log('out');

    console.log(camera._fadeRed);
    console.log(camera._fadeGreen);
    console.log(camera._fadeBlue);
    console.log(camera._fadeDuration);
    console.log(camera._fadeAlpha);

    this.add.image(400, 300, 'neuromancer');

    camera.fadeIn(6000);

    console.log('in');

    console.log(camera._flashRed);
    console.log(camera._flashGreen);
    console.log(camera._flashBlue);
    console.log(camera._flashDuration);
    console.log(camera._flashAlpha);
}

function create ()
{
    this.add.image(400, 300, 'robota');

    this.cameras.main.fadeOut(3000, runFadeIn.bind(this));
}
