class Example extends Phaser.Scene
{
    tilesprite;

    preload ()
    {
        this.load.image('brick', [ 'assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png' ]);
        this.load.image('sonic', 'assets/sprites/sonic_havok_sanity.png');
    }

    create ()
    {
        this.tilesprite = this.add.tileSprite(400, 300, 800, 600, 'brick').setPipeline('Light2D');

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

    update ()
    {
        this.tilesprite.tilePositionX += 0.3;
        this.tilesprite.tilePositionY += 0.6;
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
