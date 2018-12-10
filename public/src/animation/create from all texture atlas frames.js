var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
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
    this.anims.create({ key: 'everything', frames: this.anims.generateFrameNames('gems'), repeat: -1 });

    this.add.sprite(400, 300, 'gems').setScale(4).play('everything');
}
