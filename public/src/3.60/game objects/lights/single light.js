class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brick', [ 'assets/normal-maps/brick.jpg', 'assets/normal-maps/brick_n.png' ]);
        this.load.image('logo', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.add.image(400, 300, 'brick').setPipeline('Light2D');

        this.add.image(400, 300, 'logo');

        this.lights.enable().setAmbientColor(0x555555);

        const hsv = Phaser.Display.Color.HSVColorWheel();

        const radius = 80;
        const intensity = 6;
        const x = radius;
        const y = 0;

        const color = hsv[10].color;

        const light = this.lights.addLight(400, y, radius, color, intensity);

        this.tweens.add({
            targets: light,
            y: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
            duration: 2000
        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
