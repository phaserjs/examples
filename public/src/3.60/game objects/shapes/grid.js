class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/background1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const g1 = this.add.grid(100, 100, 128, 96, 32, 32, 0x057605);

        const g2 = this.add.grid(300, 340, 512, 256, 64, 64, 0x00b9f2).setAltFillStyle(0x016fce).setOutlineStyle();

        const g3 = this.add.grid(600, 300, 100, 500, 48, 128, 0xc145ea).setAltFillStyle(0xb038d7).setOutlineStyle().setAngle(-20);

        this.tweens.add({

            targets: g1,
            scaleX: 0.25,
            scaleY: 0.5,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });

        this.tweens.add({

            targets: g3,
            width: 400,
            angle: -90,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
