class Example extends Phaser.Scene
{
    rects = [];

    create()
    {
        this.add.text(640, 64, 'Click to rebuild colors').setOrigin(0.5);

        this.populate();

        this.input.on('pointerdown', () => {
            for (const rect of this.rects)
            {
                rect.destroy();
            }
            this.populate();
        });
    }

    populate()
    {
        const color = new Phaser.Display.Color();

        for (let y = 128; y < 640; y += 32)
        {
            // Add random colors. They're always different.
            color.setGLTo(Math.random(), Math.random(), Math.random());
            const r1 = this.add.rectangle(320, y, 384, 32, color.color);
            this.rects.push(r1);

            // Add noise-derived colors. They're always the same.
            color.setGLTo(Phaser.Math.Hash(y), Phaser.Math.Hash(y + 1), Phaser.Math.Hash(y + 2));
            const r2 = this.add.rectangle(960, y, 384, 32, color.color);
            this.rects.push(r2);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
