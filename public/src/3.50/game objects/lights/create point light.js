class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        let colorIndex = 0;
        const spectrum = Phaser.Display.Color.ColorSpectrum(128);

        const layer = this.add.lightLayer();

        let light = layer.addPointLight(400, 300, 0, 128, 1);

        let color = spectrum[colorIndex];

        light.color.set(color.r, color.g, color.b);

        colorIndex++;

        this.input.on('pointerdown', pointer => {

            light = layer.addPointLight(pointer.x, pointer.y, 0, 128, 1);

            light.color.set(color.r, color.g, color.b);

        });

        this.input.on('pointermove', pointer => {

            light.x = pointer.x;
            light.y = pointer.y;

        });

        this.input.on('wheel', (pointer, over, deltaX, deltaY, deltaZ) => {

            if (deltaY < 0)
            {
                colorIndex--;
            }
            else if (deltaY > 0)
            {
                colorIndex++;
            }

            if (colorIndex === spectrum.length)
            {
                colorIndex = 0;
            }
            else if (colorIndex < 0)
            {
                colorIndex = spectrum.length - 1;
            }

            color = spectrum[colorIndex];

            light.color.set(color.r, color.g, color.b);

        });

        this.input.keyboard.on('keydown-A', () => {

            light.radius--;

        });

        this.input.keyboard.on('keydown-D', () => {

            light.radius++;

        });

        this.input.keyboard.on('keydown-W', () => {

            light.attenuation += 0.01;

        });

        this.input.keyboard.on('keydown-S', () => {

            light.attenuation -= 0.01;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
