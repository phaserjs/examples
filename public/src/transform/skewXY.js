var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image1;
var image2;
var image3;
var image4;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
    this.load.image('atari', 'assets/sprites/atari130xe.png');
}

function create ()
{
    this.add.image(0, 0, 'grid').setOrigin(0);

    image1 = this.add.image(200, 320, 'atari'); // default origin is 0.5 = the center
    image2 = this.add.image(400, 320, 'atari').setOrigin(0.5);
    image3 = this.add.image(600, 320, 'atari').setOrigin(0.5);
    image4 = this.add.image(800, 320, 'atari').setOrigin(0.5);

    // Skew X only.
    image1.skewX = -Math.PI / 2;
    this.tweens.add({
        targets: image1,
        skewX: Math.PI / 2,
        duration: 10000,
        yoyo: true,
        repeat: -1,
    });
    // Skew Y only
    image2.skewY = -Math.PI / 2;
    this.tweens.add({
        targets: image2,
        skewY: Math.PI / 2,
        duration: 10000,
        yoyo: true,
        repeat: -1,
    });
    // Skew X & spin CW.
    image3.rotation = -Math.PI / 2;
    image3.skewX = -Math.PI / 2;
    this.tweens.add({
        targets: image3,
        rotation: Math.PI / 2,
        skewX: Math.PI / 2,
        duration: 10000,
        yoyo: true,
        repeat: -1,
    });
    // Skew Y & spin CCW.
    image4.rotation = Math.PI / 2;
    image4.skewY = -Math.PI / 2;
    this.tweens.add({
        targets: image4,
        rotation: -Math.PI / 2,
        skewY: Math.PI / 2,
        duration: 10000,
        yoyo: true,
        repeat: -1,
    });
}

function update (time, delta)
{

}
