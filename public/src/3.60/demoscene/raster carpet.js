class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.image('raster', 'assets/demoscene/raster-w-800x16.png');
        this.load.image('raster', 'assets/demoscene/raster-bw-800x16.png');
    }

    create ()
    {
        const group = this.add.group();

        group.createMultiple({ key: 'raster', repeat: 64 });

        const hsv = Phaser.Display.Color.HSVColorWheel();

        let i = 0;

        const _this = this;

        group.children.iterate(child =>
        {

            child.x = 500;
            child.y = 100;
            child.depth = 64 - i;
            child.scaleX = 0.6;

            // child.setBlendMode(Phaser.BlendModes.ADD);

            child.setTint(hsv[i * 4].color);

            i++;

            _this.tweens.add({
                targets: child,
                props: {
                    x: { value: 300, duration: 700 },
                    y: { value: 500, duration: 2500 },
                    scaleX: { value: Math.min(0.1, child.depth / 64), duration: 4000, hold: 2000, delay: 2000 }
                },
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
                delay: 38 * i
            });

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
