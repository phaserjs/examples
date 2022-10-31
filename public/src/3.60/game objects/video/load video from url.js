class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        //  Here we create our video Game Object and then we call `loadURL` to load the video in at runtime.
        const vid = this.add.video(0, 0).setOrigin(0);

        vid.loadURL('assets/video/mountains.mp4', 'loadeddata', true);

        vid.play(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
