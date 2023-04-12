class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brick', [ 'assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png' ]);
        this.load.image('brush', [ 'assets/tests/lights/skull.png', 'assets/tests/lights/skull-n.png' ]);
    }

    create ()
    {
        const brick = this.add.sprite(0, 0, 'brick');
        brick.setOrigin(0.0);
        brick.setPipeline('Light2D');

        const rt = this.add.renderTexture(0, 0, 800, 600).setPipeline('Light2D');

        const brush = this.textures.getFrame('brush');

        const light = this.lights.addLight(400, 300, 200).setIntensity(2);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', pointer =>
        {

            light.x = pointer.x;
            light.y = pointer.y;

        });

        this.input.on('pointerdown', pointer =>
        {

            rt.draw(brush, pointer.x - 60, pointer.y - 80);

        });

        this.add.text(10, 10, 'Click to paint');
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
