class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/pics/spacey.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const text = this.add.text(400, 300, 'Phaser\nBarrel FX', { align: 'center' });

        text.setOrigin(0.5, 0.5);
        text.setResolution(window.devicePixelRatio);
        text.setFontFamily('Arial');
        text.setFontStyle('bold');
        text.setFontSize(128);
        text.setShadow(8, 8);

        const fx = text.preFX.addBarrel(0.6);

        this.tweens.add({
            targets: fx,
            amount: 1.6,
            yoyo: true,
            loop: -1,
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
