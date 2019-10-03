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
    this.load.video('wormhole', 'assets/video/wormhole.mp4', 'canplaythrough', false);
    // this.load.video('wormhole', 'assets/video/wormhole.mp4', '', true);
}

function create ()
{
    var t = this.cache.video.get('wormhole');

    console.log('CREATE cache test ---->');
    console.log(t);

    var vid = this.add.video(400, 300, 'wormhole');

    this.input.once('pointerdown', function () {

        vid.play(true);

        // wormhole.createVideoFromURL('assets/video/wormhole.mp4', true);

    });
}
