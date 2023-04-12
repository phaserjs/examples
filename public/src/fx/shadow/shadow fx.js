class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('phaserlogo', 'assets/sprites/phaser-large.png');
    }

    create ()
    {

        // Description text
        this.add.text(10, 10, 'Shadow effect', { font: '16px Courier', fill: '#000000' });

        const phaserLogoImg1 = this.add.image(this.scale.width / 2, this.scale.height / 2 - 50, 'phaserlogo');
        phaserLogoImg1.setInteractive();
        const fxShadow = phaserLogoImg1.preFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);

        this.add.tween({
            targets: phaserLogoImg1,
            scale: 1.05,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ecf0f1',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
