class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
        this.load.image('bg', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);
        this.load.bitmapFont('ice', [ 'assets/fonts/bitmap/iceicebaby.png', 'assets/fonts/bitmap/iceicebaby_n.png' ], 'assets/fonts/bitmap/iceicebaby.xml');
    }

    create ()
    {
        this.add.sprite(400, 300, 'bg').setPipeline('Light2D').setAlpha(0.2);

        this.add.sprite(680, 600, 'sonic').setOrigin(0.5, 1);

        this.add.bitmapText(400, 300, 'ice', 'Bitmap Text\nwith Lights', 110).setCenterAlign().setOrigin(0.5).setPipeline('Light2D');

        this.lights.enable();
        this.lights.setAmbientColor(0x808080);

        const spotlight = this.lights.addLight(400, 300, 280).setIntensity(3);

        this.input.on('pointermove', pointer =>
        {

            spotlight.x = pointer.x;
            spotlight.y = pointer.y;

        });

        const colors = [
            0xffffff, 0xff0000, 0x00ff00, 0x00ffff, 0xff00ff, 0xffff00
        ];

        let currentColor = 0;

        this.input.on('pointerdown', pointer =>
        {

            currentColor++;

            if (currentColor === colors.length)
            {
                currentColor = 0;
            }

            spotlight.setColor(colors[currentColor]);

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};


const game = new Phaser.Game(config);
