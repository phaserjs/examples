class Example extends Phaser.Scene
{
    originalTexture;
    newTexture;
    context;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.originalTexture = this.textures.get('dude').getSourceImage();

        this.newTexture = this.textures.createCanvas('dudeNew', this.originalTexture.width, this.originalTexture.height);

        this.context = this.newTexture.getSourceImage().getContext('2d');

        this.context.drawImage(this.originalTexture, 0, 0);

        this.add.image(100, 100, 'dude');
        this.add.image(200, 100, 'dudeNew');

        this.time.addEvent({ delay: 500, callback: () => this.hueShift(), loop: true });
    }

    hueShift ()
    {
        const pixels = this.context.getImageData(0, 0, this.originalTexture.width, this.originalTexture.height);

        for (let i = 0; i < pixels.data.length / 4; i++)
        {
            this.processPixel(pixels.data, i * 4, 0.1);
        }

        this.context.putImageData(pixels, 0, 0);

        this.newTexture.refresh();
    }

    processPixel (data, index, deltahue)
    {
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];

        const hsv = Phaser.Display.Color.RGBToHSV(r, g, b);

        const h = hsv.h + deltahue;

        const rgb = Phaser.Display.Color.HSVToRGB(h, hsv.s, hsv.v);

        data[index] = rgb.r;
        data[index + 1] = rgb.g;
        data[index + 2] = rgb.b;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
