class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('wheel', 'assets/pics/color-wheel.png');
    }

    create ()
    {
        //  578 x 550 (289 x 275)
        this.add.image(400, 300, 'wheel');

        const graphics = this.add.graphics({ x: 0, y: 0 });

        const _this = this;

        this.input.on('pointermove', pointer =>
        {

            const color = _this.textures.getPixel(pointer.x - 111, pointer.y - 25, 'wheel');

            graphics.clear();

            if (color)
            {
                graphics.lineStyle(1, 0x000000, 1);
                graphics.strokeRect(pointer.x - 1, pointer.y - 1, 34, 34);

                graphics.fillStyle(color.color, 1);
                graphics.fillRect(pointer.x, pointer.y, 32, 32);
            }
        });
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
