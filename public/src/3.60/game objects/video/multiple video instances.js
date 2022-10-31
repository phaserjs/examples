class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        //  Videos all share the same base Video DOM Element
        //  so if we want the same video, playing at different offsets,
        //  we need to load it multiple times:

        const vid1 = this.add.video(0, 0).setOrigin(0).setScale(0.5);

        vid1.loadURL('assets/video/mountains.mp4', 'loadeddata', true);
        vid1.play(true);

        const vid2 = this.add.video(480, 0).setOrigin(0).setScale(0.5);

        vid2.loadURL('assets/video/mountains.mp4', 'loadeddata', true);
        vid2.play(true, 8.0);

        const vid3 = this.add.video(0, 270).setOrigin(0).setScale(0.5);

        vid3.loadURL('assets/video/mountains.mp4', 'loadeddata', true);
        vid3.play(true, 16.0);

        const vid4 = this.add.video(480, 270).setOrigin(0).setScale(0.5);

        vid4.loadURL('assets/video/mountains.mp4', 'loadeddata', true);
        vid4.play(true, 20.0);
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
