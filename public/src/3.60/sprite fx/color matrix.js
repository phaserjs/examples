class ColorMatrixFX extends Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline
{
    constructor (game)
    {
        super({ game });

        this.colorMatrix = new Phaser.Display.ColorMatrix();
    }

    onDraw (target, swapTarget)
    {
        this.copySprite(target, swapTarget, true, true, false, this.colorMatrix);

        this.copyToGame(swapTarget);
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('beer', 'assets/sprites/donut.png');
        this.load.image('logo', 'assets/sprites/phaser2.png');
        this.load.image('man', 'assets/sprites/gingerbread.png');
    }

    create ()
    {
        const pipeline = this.renderer.pipelines.add('ColorMatrixFX', new ColorMatrixFX(this.game));

        const beer = this.add.image(100, 300, 'beer').setPipeline(pipeline);
        const logo = this.add.image(400, 300, 'logo').setPipeline(pipeline);
        const man = this.add.image(700, 300, 'man').setPipeline(pipeline);

        let h = 0;
        let g = 0;
        let s = 0;

        beer.onFXCopy = (pipeline) => {

            pipeline.colorMatrix.saturate(s);

            s += 0.01;

            if (s > 4)
            {
                s = 0;
            }

        };

        logo.onFXCopy = (pipeline) => {

            pipeline.colorMatrix.hue(h);

            h++;

            if (h === 360)
            {
                h = 0;
            }

        };

        man.onFXCopy = (pipeline) => {

            pipeline.colorMatrix.grayscale(g);

            g += 0.01;

            if (g > 1)
            {
                g = 0;
            }

        };

        // pipeline.colorMatrix.brightness(1.2);
        // pipeline.colorMatrix.saturate(2.5);
        // pipeline.colorMatrix.hue(40);
        // pipeline.colorMatrix.grayscale(1);
        // pipeline.colorMatrix.blackWhite();
        // pipeline.colorMatrix.contrast(1);
        // pipeline.colorMatrix.negative();
        // pipeline.colorMatrix.night();
        // pipeline.colorMatrix.lsd();
        // pipeline.colorMatrix.desaturateLuminance();
        // pipeline.colorMatrix.sepia();
        // pipeline.colorMatrix.brown();
        // pipeline.colorMatrix.vintagePinhole();
        // pipeline.colorMatrix.kodachrome();
        // pipeline.colorMatrix.technicolor();
        // pipeline.colorMatrix.polaroid();
        // pipeline.colorMatrix.shiftToBGR();
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#0a0067',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
