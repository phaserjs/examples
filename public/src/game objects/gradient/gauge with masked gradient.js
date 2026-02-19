class Example extends Phaser.Scene
{
    graphics;

    create ()
    {
        // Asymmetrical conic gradient creates color that changes with angle.
        const gradient = this.add.gradient({
            shapeMode: 4, // CONIC_ASYMMETRIC
            bands: { colorStart: 0x22ff22, colorEnd: 0xff2222, colorSpace: 1 },
            start: { x: 0.5, y: 0.5 }, // Start at middle
            shape: { x: 0, y: 0.5 }
        }, 400, 350, 600, 600);

        // Create an arc to act as the gauge.
        const graphics = this.add.graphics();
        graphics.lineStyle(64, 0xffffff, 1);
        graphics.beginPath();
        graphics.arc(400, 350, 260, Phaser.Math.DegToRad(30), Phaser.Math.DegToRad(150), true);
        graphics.strokePath();
        graphics.setVisible(false);

        // Mask the gradient with the arc.
        gradient.enableFilters().filters.external.addMask(graphics);

        this.graphics = graphics;
    }

    update (time)
    {
        // Animate the gauge to rise and fall.
        const graphics = this.graphics;
        graphics.clear();
        graphics.lineStyle(64, 0xffffff, 1);
        graphics.beginPath();
        graphics.arc(400, 350, 260, Phaser.Math.DegToRad(30 - 240 * (0.5 + 0.5 * Math.sin(time / 1200)) + 4 * (0.5 + 0.5 * Math.sin(time / 3.3))), Phaser.Math.DegToRad(150), true);
        graphics.strokePath();
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
