class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        //  Here we create our video Game Object and then we call `loadURL` to load the video in.
        const video = this.add.video(640, 360);

        video.loadURL('assets/video/tunnel.mp4', true);

        video.play(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
