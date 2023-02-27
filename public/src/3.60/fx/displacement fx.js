class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.image('pic', 'assets/pics/taikodrummaster.jpg');
        // this.load.image('pic', 'assets/pics/swirl1.jpg');
        this.load.image('pic', 'assets/pics/skull-and-bones.jpg');
        this.load.image('distort1', 'assets/textures/distortion.png');
        this.load.image('distort2', 'assets/tests/noisesmall.png');
        // this.load.image('distort3', 'assets/textures/distortion3.png');
        this.load.image('distort3', 'assets/textures/distortion5.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        const fx = pic.preFX.addDisplacement('distort3', -0.3, 0);

        pic.preFX.addCircle(8, 0x2d2d2d);

        // const fx = pic.preFX.addDisplacement('distort3', 0, -1);

        this.tweens.add({
            targets: fx,
            x: 0.3,
            // y: 0.1,
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
