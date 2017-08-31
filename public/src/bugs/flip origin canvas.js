var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //  pic = 320 x 256
    this.load.image('pic', 'assets/pics/cougar-face-of-nature.png');
}

function create ()
{
    //  any origin !== 0 = fails with flip X or Y enabled
    this.add.image(200, 0, 'pic').setOrigin(0);
    window.bill = this.add.image(200, 256, 'pic').setOrigin(0).setFlipX(true);

    //  origin 0.5 = only one that works with flip enabled
    this.add.image(700, 128, 'pic');
    window.ben = this.add.image(700, 384, 'pic').setFlipX(true);
}
