class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
        this.load.image('bg', [ 'assets/textures/gold.png', 'assets/textures/gold-n.png' ]);
    }

    create ()
    {
        this.add.sprite(400, 300, 'bg').setPipeline('Light2D').setAlpha(0.5);

        const text1 = this.add.text(20, 50, 'Shadow Stroke', { fontFamily: 'Arial Black', fontSize: 74, color: '#00a6ed' });
        text1.setStroke('#2d2d2d', 16);
        text1.setShadow(4, 4, '#000000', 8, true, false);
        text1.setPipeline('Light2D');

        const text2 = this.add.text(20, 180, 'Shadow Fill', { fontFamily: 'Arial Black', fontSize: 74, color: '#00a6ed' });
        text2.setStroke('#2d2d2d', 16);
        text2.setShadow(4, 4, '#000000', 2, false, true);
        text2.setPipeline('Light2D');

        const text3 = this.add.text(20, 310, 'Shadow Both', { fontFamily: 'Arial Black', fontSize: 74, color: '#00a6ed' });
        text3.setStroke('#2d2d2d', 16);
        text3.setShadow(4, 4, '#000000', 2, true, true);
        text3.setPipeline('Light2D');

        const text4 = this.add.text(20, 440, 'Shadow None', { fontFamily: 'Arial Black', fontSize: 74, color: '#00a6ed' });
        text4.setStroke('#2d2d2d', 16);
        text4.setShadow(4, 4, '#000000', 2, false, false);
        text4.setPipeline('Light2D');

        this.add.sprite(680, 600, 'sonic').setOrigin(0.5, 1);

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
