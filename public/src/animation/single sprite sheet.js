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
        frames: this.anims.generateFrameNumbers('boom', 0, 23, 23),
        framerate: 20
    };

    this.anims.create('explode', config);

    var boom = this.add.sprite(400, 300, 'boom');

    boom.anims.play('explode');
}
