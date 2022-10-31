class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //  The 'true'

        this.load.video('underwater', 'assets/video/underwater.mp4', 'loadeddata', true, true);
    }

    create ()
    {
        this.add.video(400, 300, 'underwater').play(true).setScale(1.2);
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
