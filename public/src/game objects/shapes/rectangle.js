class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/background1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const r1 = this.add.rectangle(200, 200, 148, 148, 0x6666ff);

        const r2 = this.add.rectangle(400, 200, 148, 148, 0x9966ff);

        r2.setStrokeStyle(4, 0xefc53f);

        const r3 = this.add.rectangle(600, 200, 148, 148);

        r3.setStrokeStyle(2, 0x1a65ac);

        const r4 = this.add.rectangle(200, 400, 148, 148, 0xff6699);

        const r5 = this.add.rectangle(400, 400, 148, 148, 0xff33cc);

        const r6 = this.add.rectangle(600, 400, 148, 148, 0xff66ff);

        this.tweens.add({

            targets: r4,
            scaleX: 0.25,
            scaleY: 0.5,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });

        this.tweens.add({

            targets: r5,
            alpha: 0.2,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });

        this.tweens.add({

            targets: r6,
            angle: 90,
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
    scene: Example
};

const game = new Phaser.Game(config);
