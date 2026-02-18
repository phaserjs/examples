class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        // Two colors, quite separate in hue.
        const red = new Phaser.Display.Color(255, 96, 96);
        const blue = new Phaser.Display.Color(32, 96, 192);

        const steps = 32;

        for (let i = 0; i < steps; i++)
        {
            // RGB interpolation loses saturation in the middle.
            const interRGB = Phaser.Display.Color.Interpolate.ColorWithColor(red, blue, steps, i);

            // HSV interpolation maintains saturation and value.
            const interHSV = Phaser.Display.Color.Interpolate.ColorWithColor(red, blue, steps, i, true);

            // Positive hue interpolation forces hue to avoid the shorter rotation through purple.
            const interHSVIncrease = Phaser.Display.Color.Interpolate.ColorWithColor(red, blue, steps, i, true, 1);

            const x = (i + 1) * (this.scale.width) / (steps + 2);

            this.add.rectangle(x, 180, 32, 32, interRGB.color);
            this.add.rectangle(x, 360, 32, 32, interHSV.color);
            this.add.rectangle(x, 540, 32, 32, interHSVIncrease.color);

            const style = { fontFamily: 'sans-serif', fontSize: 24, fontColor: 0xffffff };
            this.add.text(64, 220, "RGB interpolation", style);
            this.add.text(64, 400, "HSV nearest interpolation", style);
            this.add.text(64, 580, "HSV positive interpolation", style);
        }
    }

}

const config = {
    width: 1280,
    height: 720,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
