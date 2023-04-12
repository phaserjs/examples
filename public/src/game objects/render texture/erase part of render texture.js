class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('brush', 'assets/particles/sparkle1.png');
        this.load.image('tiles', 'assets/textures/grass.png');
        this.load.image('bg', 'assets/pics/turkey-1985086.jpg');
    }

    create ()
    {
        this.add.image(0, 0, 'bg').setOrigin(0);

        const rt = this.add.renderTexture(400, 300, 800, 600);

        for (let y = 0; y < 2; y++)
        {
            for (let x = 0; x < 2; x++)
            {
                rt.draw('tiles', x * 512, y * 512);
            }
        }

        const brush = this.make.image({ key: 'brush' }, false).setScale(0.5);

        this.input.on('pointermove', pointer =>
        {
            if (pointer.isDown)
            {
                rt.erase(brush, pointer.x - 16, pointer.y - 16);
            }

        });

        this.input.on('pointerdown', pointer =>
        {
            rt.erase(brush, pointer.x - 16, pointer.y - 16);

        });
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
