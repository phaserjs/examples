class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/background1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const r1 = this.add.line(200, 200, 0, 0, 140, 0, 0x6666ff);

        const r2 = this.add.line(400, 200, 0, 0, 140, 0, 0x9966ff);

        //  WebGL only
        r2.setLineWidth(10, 40);

        const r3 = this.add.line(600, 200, 0, 0, 140, 0, 0x1a65ac);

        //  WebGL only
        r3.setLineWidth(1, 16);

        const r4 = this.add.line(200, 400, 0, 0, 140, 0, 0xff6699);

        const r5 = this.add.line(400, 400, 0, 0, 140, 0, 0xff33cc);

        const r6 = this.add.line(600, 400, 0, 0, 140, 0, 0xff66ff);

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
