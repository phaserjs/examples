class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('raster', 'assets/phaser3/bars.png', { frameWidth: 46, frameHeight: 2 });
    }

    create ()
    {
        const group = this.add.group();

        const x = 200;
        let y = 0;
        let frame = 0;

        for (let i = 0; i < 180; i++)
        {
            const bar = group.create(x, y, 'raster', frame);

            bar.setOrigin(0);

            bar.displayHeight = 600 - y;

            y += 3;

            frame++;

            if (frame === 9)
            {
                frame = 0;
            }
        }

        this.tweens.add({
            targets: group.getChildren(),
            x: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
            duration: 1500,
            delay: function (target, key, value, targetIndex)
            {
                return targetIndex * 30;
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
