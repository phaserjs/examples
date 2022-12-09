class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        for (let i = 0; i < 256; i++)
        {
            const x = Phaser.Math.Between(0, 3000);
            const y = Phaser.Math.Between(0, 3000);
            const frame = Phaser.Utils.Array.GetRandom([ 'YellowButtonSml', 'PinkButtonSml', 'GreenButtonSml', 'RedButtonSml' ]);
            const width = Phaser.Math.Between(256, 1024);
            const height = Phaser.Math.Between(128, 384);

            const slice = this.add.nineslice(x, y, 'ui', frame, 132, 98, 64, 64, 48, 48);

            const duration = Phaser.Math.Between(1000, 4000);

            this.tweens.add({
                targets: slice,
                width,
                height,
                duration,
                ease: 'sine.inout',
                yoyo: true,
                repeat: -1
            });
        }

        this.tweens.add({
            targets: this.cameras.main,
            props: {
                scrollX: { value: 1000, duration: 4000 },
                scrollY: { value: 2000, duration: 8000 },
                zoom: { value: 0.20, duration: 3000, hold: 2000 },
            },
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#003663',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
