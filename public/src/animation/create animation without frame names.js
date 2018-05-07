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
    var textureFrames = this.textures.get('gems').getFrameNames();

    var animFrames = [];

    textureFrames.forEach(function (frameName) {

        animFrames.push({ key: 'gems', frame: frameName });

    });

    this.anims.create({ key: 'diamond', frames: animFrames, repeat: -1 });

    this.add.sprite(400, 300, 'gems').play('diamond');
}
