var config = {
    type: Phaser.AUTO,
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
    this.load.spritesheet('boom', 'assets/sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
}

function create ()
{
    var config = {
        key: 'explode',
        frames: this.anims.generateFrameNumbers('boom', { start: 0, end: 23, first: 23 }),
        frameRate: 30,
        repeat: -1,
        repeatDelay: 2
    };

    this.anims.create(config);

    for (var i = 0; i < 128; i++)
    {
        var x = Phaser.Math.Between(0, 790);
        var y = Phaser.Math.Between(0, 590);

        var boom = this.add.sprite(x, y, 'boom', 23);

        boom.anims.delayedPlay(Math.random() * 3, 'explode');
    }
}
