class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/taikodrummaster.jpg');
        this.load.image('distort', 'assets/textures/distortion4.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        const fx = pic.preFX.addDisplacement('distort', -0.03, -0.03);

        this.tweens.add({
            targets: fx,
            x: 0.03,
            y: 0.03,
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
