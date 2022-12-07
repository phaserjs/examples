class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('piggy', 'assets/pics/pigchampagne.png');
    }

    create ()
    {
        const src = this.textures.get('piggy').getSourceImage();

        const canvas = this.textures.createCanvas('map', src.width, src.height).draw(0, 0, src);

        //  You can now access the CanvasTexture properties, such as canvas.imageData

        //  Here we'll just create a rectangle for each pixel, with a unique size

        const pixel = new Phaser.Display.Color();

        for (let y = 0; y < src.height; y++)
        {
            for (let x = 0; x < src.width; x++)
            {
                canvas.getPixel(x, y, pixel);

                if (pixel.a > 0)
                {
                    this.add.rectangle(x * 4, y * 8, 4, 8, pixel.color);
                }
            }
        }
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
