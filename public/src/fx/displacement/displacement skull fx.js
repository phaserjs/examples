class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/skull-and-bones.jpg');
        this.load.image('distort', 'assets/textures/distortion5.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        const fx = pic.preFX.addDisplacement('distort', -0.3, 0);

        pic.preFX.addCircle(8, 0x2d2d2d);

        this.tweens.add({
            targets: fx,
            x: 0.3,
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
