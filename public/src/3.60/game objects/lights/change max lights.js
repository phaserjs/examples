class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brick', [ 'assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png' ]);
    }

    create ()
    {
        this.add.image(400, 300, 'brick').setPipeline('Light2D');

        this.lights.enable().setAmbientColor(0x555555);

        const hsv = Phaser.Display.Color.HSVColorWheel();

        const radius = 80;
        const intensity = 6;
        let x = radius;
        let y = 0;

        //  To change the total number of lights see the Game Config object
        const maxLights = 20;

        //  Create a bunch of lights
        for (let i = 0; i < maxLights; i++)
        {
            const color = hsv[i * 10].color;

            const light = this.lights.addLight(x, y, radius, color, intensity);

            this.tweens.add({
                targets: light,
                y: 600,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
                duration: 2000,
                delay: i * 100
            });

            x += radius * 2;

            if (x > 800)
            {
                x = radius;
                y += radius;
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    maxLights: 20,
    scene: Example
};

const game = new Phaser.Game(config);
