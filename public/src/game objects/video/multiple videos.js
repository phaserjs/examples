class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('fireworks', 'assets/video/fireworks.mp4', true);
        this.load.video('pumpkins', 'assets/video/pumpkins.mp4', true);
        this.load.video('underwater', 'assets/video/underwater.mp4', true);
        this.load.video('river', 'assets/video/river.mp4', true);
    }

    create ()
    {
        const vid1 = this.add.video(0, 0, 'pumpkins').setOrigin(0, 0).play(true);

        vid1.once('play', () => {

            vid1.setDisplaySize(400, 300);

        });

        const vid2 = this.add.video(400, 0, 'fireworks').setOrigin(0, 0).play(true);

        vid2.once('play', () => {

            vid2.setDisplaySize(400, 300);

        });

        const vid3 = this.add.video(0, 300, 'underwater').setOrigin(0, 0).play(true);

        vid3.once('play', () => {

            vid3.setDisplaySize(400, 300);

        });

        const vid4 = this.add.video(400, 300, 'river').setOrigin(0, 0).play(true);

        vid4.once('play', () => {

            vid4.setDisplaySize(400, 300);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
