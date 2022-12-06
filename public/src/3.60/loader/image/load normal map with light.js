class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image({
            key: 'robot',
            url: 'assets/pics/equality-by-ragnarok.png',
            normalMap: 'assets/normal-maps/equality-by-ragnarok_n.png'
        });
    }

    create ()
    {
        this.add.image(-300, 0, 'robot').setOrigin(0).setPipeline('Light2D');

        const light = this.lights.addLight(0, 0, 200);

        this.lights.enable().setAmbientColor(0x555555);

        this.input.on('pointermove', pointer =>
        {

            light.x = pointer.x;
            light.y = pointer.y;

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
