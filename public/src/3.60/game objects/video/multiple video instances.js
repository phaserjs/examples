class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('mountains', 'assets/video/mountains.mp4', true);
    }

    create ()
    {
        const vid1 = this.add.video(0, 0, 'mountains').setOrigin(0).setScale(0.5);
        const vid2 = this.add.video(480, 0, 'mountains').setOrigin(0).setScale(0.5);
        const vid3 = this.add.video(0, 270, 'mountains').setOrigin(0).setScale(0.5);
        const vid4 = this.add.video(480, 270, 'mountains').setOrigin(0).setScale(0.5);

        //  The same video playing at different offsets
        vid1.play(true);
        vid2.play(true, 8.0);
        vid3.play(true, 16.0);
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
