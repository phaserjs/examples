class Example extends Phaser.Scene
{
    bg;
    gradient;

    create ()
    {
        // Sneaky background gradient
        this.bg = this.add.gradient({
            repeatMode: 3,
            shapeMode: 1,
            shape: { x: 0, y: 0.3 },
            bands: [
                {
                    colorStart: 0x66bb99,
                    colorEnd: 0x9966bb,
                    colorSpace: 1,
                    interpolation: 2,
                }
            ]
        }, 400, 300, 1400, 800)
        .setRotation(-0.25);

        this.gradient = this.add.gradient({
            shapeMode: 3, // CONIC_SYMMETRIC
            bands: { colorStart: 0xffffff, colorEnd: 0x000000 },
            start: { x: 0.5, y: 0.5 }, // Start at middle
            shape: { x: 0.5, y: 0 } // Transition towards edge
        }, 400, 300, 400, 400);
    }

    update (time, delta)
    {
        const t = this.game.loop.time;
        this.bg.rotation = 0.25 * Math.sin(t / 3000);
        this.gradient.rotation = 0.03 * Math.sin(t / 1234);
        this.gradient.setPosition(
            400 + 16 * Math.sin(t / 876),
            300 + 16 * Math.sin(t / 765)
        );
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
