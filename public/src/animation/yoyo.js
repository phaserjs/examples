var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
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
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    this.anims.create({
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        yoyo: true,
        repeat: -1
    });

    this.add.sprite(400, 100, 'gems').play('diamond');
}
