var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.video('vid', 'assets/video/pumpkins.mp4', 'canplaythrough', false);
    // this.load.video('wormhole', 'assets/video/wormhole.mp4', '', true);
}

function create ()
{
    var vid = this.add.video(400, 300, 'vid');

    vid.play(true, true);

    vid.on('created', () => {

        console.log('hello?');

        vid.saveTexture('pumpy');

        this.add.image(100, 100, 'pumpy').setScale(0.25).setOrigin(0);
        
    });

    // this.input.on('pointerdown', function () {
    // });
}
