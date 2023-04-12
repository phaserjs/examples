class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('block', 'assets/sprites/32x32-white.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const hsv = Phaser.Display.Color.HSVColorWheel();

        const gw = 16;
        const gh = 16;
        const bs = 32;

        const group = this.add.group({
            key: 'block',
            quantity: gw * gh,
            gridAlign: {
                width: gw,
                height: gh,
                cellWidth: bs,
                cellHeight: bs,
                x: (800 - (bs * gw)) / 2,
                y: (600 - (bs * gh) + bs / 2) / 2
            }
        });

        const size = gw * gh;

        //  Tint them
        group.getChildren().forEach((child, index) => {

            const c = Math.floor(index * (360 / size));

            child.setTint(hsv[c].color);

        });

        this.variations = [
            [ 200, { grid: [ gw, gh ], from: 'first' } ],
            [ 200, { grid: [ gw, gh ], from: 'center' } ],
            [ 200, { grid: [ gw, gh ], from: 'last' } ],
            [ 30, { from: 'center' } ],
            [ 30, { from: 'first' } ],
            [ 30, { from: 'last' } ],
            [ 30, { from: 201 } ],
            [ 30, { from: 46 } ],
            [ 30, { ease: 'quad.out' } ],
            [ 30, { ease: 'quart.in' } ],
            [ 30, { ease: 'sine.inout' } ],
            [ 30, { from: 'last', ease: 'quad.inout' } ],
            [ [ 1500, 3000 ] ],
            [ [ 0, 5000 ], { from: 'center' } ],
            [ 20, { ease: 'cubic.inout', from: 'center' } ],
            [ [ 500, 5000 ], { from: 'center' } ],
            [ 20, { ease: 'power2', from: 'center' } ],
            [ [ 100, 600 ], { ease: 'cubic.inout' } ],
        ];

        const text = this.add.text(400, 24, '', { font: '18px Courier', fill: '#ffffff' }).setOrigin(0.5);

        this.getStaggerTween(0, group, text);
    }

    getStaggerTween (i, group, text)
    {
        const stagger = this.variations[i];

        text.setText(`this.tweens.stagger(${JSON.stringify(stagger[0])}, ${JSON.stringify(stagger[1])})`);

        this.tweens.add({
            targets: group.getChildren(),
            scale: 0.2,
            ease: 'linear',
            duration: 500,
            delay: this.tweens.stagger(...stagger),
            completeDelay: 1000,
            onComplete: () =>
            {
                group.getChildren().forEach(child => {

                    child.setScale(1);

                });

                if (i < this.variations.length - 1)
                {
                    i++;
                }
                else
                {
                    i = 0;
                }

                this.getStaggerTween(i, group, text);
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
