class Example extends Phaser.Scene
{
    splatStencil;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('snowflake', 'assets/particles/snowflake.png');
        this.load.image('chillno', 'assets/pics/touhou1.png');
        this.load.image('splat', 'assets/pics/splat1.png');
    }

    create ()
    {
        // Create a draw region by cutting a hole in a stencil.
        this.add.stencil(0,0,this.add.rectangle(400,300,800,600,0));
        this.splatStencil = this.add.stencil(400,300,
            [
                this.add.image(0, 0, 'snowflake').setScale(5),
                this.add.image(0, 0, 'splat').setScale(0.6) // Fill in the middle because the snowflake is too fuzzy
            ],
            {
                stencilLayerMode: 'subtractLayer',
                stencilValueWrap: false // Only erase down to 0 layers.
            }
        );

        this.add.gradient({
            shapeMode: 0,
            direction: Math.PI / 2,
            bands: [
                {
                    colorStart: 0xffffff,
                    colorEnd: 0x6699bb,
                    colorSpace: 1,
                    // interpolation: 4,
                }
            ]
        }, 400, 300, 800, 600);

        // Erase the stencil in the top 3/4.
        this.add.stencil(0, 0,
            this.add.rectangle(400, 160, 800, 600, 0),
            {
                stencilLayerMode: 'subtractLayer',
                stencilValueWrap: false // Only erase down to 0 layers.
            }
        );

        // Add a sprite.
        this.add.image(420, 600, 'chillno').setOrigin(0.5, 1).setScale(1.2);
    }

    update (time, delta)
    {
        this.splatStencil.setPosition(
            400 + 8 * Math.sin(time / 1000),
            350 + 8 * Math.sin(time / 654)
        ).setRotation(time / 1777);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#7799bb',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
