var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var wormhole = this.add.video(400, 300);

    this.input.once('pointerdown', function () {

        wormhole.createVideoFromURL('assets/video/wormhole.mp4', true);

    });
}
