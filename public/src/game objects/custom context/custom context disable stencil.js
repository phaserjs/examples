class Example extends Phaser.Scene
{
    splatStencil;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('smoke', 'assets/particles/smoke0.png');
        this.load.image('mech', 'assets/pics/titan-mech.png');
        this.load.image('splat', 'assets/pics/splat1.png');
    }

    create ()
    {
        // Create a draw region by cutting a hole in a stencil.
        this.add.stencil(0, 0, this.add.rectangle(400, 300, 800, 600, 0));
        this.splatStencil = this.add.stencil(400, 350,
            this.add.image(0 ,0, 'splat').setScale(0.8),
            { stencilLayerMode: 'subtractLayer' }
        );

        this.add.gradient({
            shapeMode: 0,
            direction: Math.PI / 2,
            bands: [
                {
                    colorStart: 0x6699bb,
                    colorEnd: 0x000000,
                    colorSpace: 1,
                    interpolation: 4,
                }
            ]
        }, 400, 300, 1400, 800);

        // Add a sprite that's not affected by the stencil.
        // If you look close, you can see the right foot sometimes leaves the stencil area,
        // which is not desirable. This brute force exemption has its limits.
        const customContext = this.add.customcontext(0, 0,
            this.add.image(400, 260, 'mech').setScale(2),
            (drawingContext) => {
                drawingContext.state.stencil.enabled = false;
            }
        );

        // Put flames over the top of the sprite.
        // These are still affected by the stencil.
        const flame = this.add.particles(400, 600, 'smoke',
        {
            color: [ 0xfacc22, 0xf89800, 0xf83600, 0x9f0404 ],
            colorEase: 'quad.out',
            lifespan: 3600,
            angle: { min: -100, max: -80 },
            scale: { start: 0.70, end: 0, ease: 'sine.out' },
            speed: 100,
            advance: 2000,
            blendMode: 'ADD',
            quantity: 5,
            emitZone: {
                type: 'edge',
                source: new Phaser.Geom.Line(-400, 0, 400, 0),
                quantity: 64
            }
        });
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
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
