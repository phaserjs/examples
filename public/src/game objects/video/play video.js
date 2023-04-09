class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('wormhole', 'assets/video/wormhole.mp4', 'loadeddata', false, true);
    }

    create ()
    {
        const vid = this.add.video(400, 300, 'wormhole');

        vid.play(true);

        // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
        vid.setPaused(false);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [Example]
};

const game = new Phaser.Game(config);
