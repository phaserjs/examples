class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('pic', 'assets/pics/skull-and-bones.jpg');
        this.load.image('distort', 'assets/textures/distortion5.png');
    }

    create ()
    {
        const pic = this.add.image(400, 300, 'pic');

        const fx = pic.enableFilters().filters.internal.addDisplacement('distort', -0.3, 0);

        // Add a mask to the image.
        const mask = this.add.circle(400, 300, 296, 0xffffff).setVisible(false);
        mask.enableFilters().filters.external.addBlur();
        pic.filters.external.addMask(mask);

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
