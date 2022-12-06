class Example extends Phaser.Scene
{
    create ()
    {
        const debug = this.add.graphics();
        const text = this.add.text(10, 540, '', { fill: '#00ff00' });

        const parent = new Phaser.Structs.Size(400, 300);
        const child = new Phaser.Structs.Size(100, 100, Phaser.Structs.Size.NONE, parent);

        const draw = () =>
        {
            debug.clear().translateCanvas(10, 10);
            debug.lineStyle(1.5, 0xffff00).strokeRect(1, 1, parent.width, parent.height);
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
