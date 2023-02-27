class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/taikodrummaster.jpg');
        this.load.image('distort1', 'assets/textures/distortion.png');
        this.load.image('distort2', 'assets/tests/noisesmall.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        const fx = pic.preFX.addDisplacement('distort1', -0.04, -0.06);

        this.tweens.add({
            targets: fx,
            x: 0.04,
            y: 0.06,
            yoyo: true,
            loop: -1,
            duration: 2000,
            ease: 'sine.inout'
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

const game = new Phaser.Game(config);
