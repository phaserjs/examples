class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.glsl('Colorful Voronoi', 'assets/shaders/colorful-voronoi.frag');
    }

    create ()
    {
        const shader = this.add.shader({
            name: 'Colorful Voronoi',
            fragmentKey: 'Colorful Voronoi',
            initialUniforms: {
                resolution: [this.scale.width, this.scale.height]
            },
            setupUniforms: (setUniform, drawingContext) => {
                setUniform('time', this.game.loop.getDuration());
            }
        }, 0, 0, 128, 128);

        shader.setRenderToTexture('wibble');

        const blocks = this.add.group({ key: 'wibble', repeat: 63, setScale: { x: 0.5, y: 0.5 } });

        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: 9,
            height: 7,
            cellWidth: 128,
            cellHeight: 128,
            x: 0,
            y: 0
        });

        let i = 0;

        blocks.children.forEach(function (child)
        {

            this.tweens.add({
                targets: child,
                props: {
                    scale: { value: 1, duration: 500 },
                    angle: { value: 360, duration: 4000 }
                },
                ease: 'Sine.easeInOut',
                delay: i * 50,
                repeat: -1,
                yoyo: true
            });

            i++;

            if (i % 10 === 0)
            {
                // i = 0;
            }

        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    scene: Example
};

const game = new Phaser.Game(config);
