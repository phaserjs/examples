class Example extends Phaser.Scene
{
    create ()
    {
        const debug = this.add.graphics();
        const text = this.add.text(10, 540, '', { fill: '#00ff00' });

        const child = new Phaser.Structs.Size(420, 340);

        child.setMin(320, 240).setMax(640, 480);

        const draw = () =>
        {
            debug.clear().translateCanvas(10, 10);
            debug.fillStyle(0x00ff00, 0.5).fillRect(1, 1, child.width, child.height);

            text.setText([
                `width: ${child.width}`,
                `height: ${child.height}`,
                `aspect ratio: ${child.aspectRatio}`
            ]);
        };

        this.input.on('pointermove', pointer =>
        {

            child.setSize(pointer.x, pointer.y);

            draw();

        });

        draw();
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
