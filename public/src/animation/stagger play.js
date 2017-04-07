var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('boom', 'assets/sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
}

function create ()
{
    var config = {
        frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 23, first: 23 }),
        framerate: 20
    };

    // this.anims.create('explode', config);

    layer = this.add.layer();

    layer.createMultiple({ key: 'boom', frame: 10, repeat: 32 });

    layer.setXY(32, 100, 32);

    // layer.gridAlign(10, 10, 64, 64);

    // var boom = this.add.sprite(400, 300, 'boom');

    // boom.anims.play('explode');
}
