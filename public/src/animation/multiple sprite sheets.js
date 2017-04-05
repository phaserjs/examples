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
        framerate: 30,
        repeat: -1,
        repeatDelay: 2
    };

    this.anims.create('explode', config);

    for (var i = 0; i < 64; i++)
    {
        var x = Phaser.Math.Between(0, 790);
        var y = Phaser.Math.Between(0, 590);

        var boom = this.add.sprite(x, y, 'boom', 23);

        boom.anims.delayedPlay(Math.random() * 3, 'explode');
    }
}
