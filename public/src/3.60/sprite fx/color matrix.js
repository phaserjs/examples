class ColorMatrixFX extends Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline
{
    constructor (game)
    {
        super({ game });

        this.colorMatrix = new Phaser.Display.ColorMatrix();

        // this.target = new Phaser.Renderer.WebGL.RenderTarget(game.renderer, 32, 32);
    }

    onDraw (target, swapTarget)
    {
        // var target = this.target.resize(source.width, source.height);

        // this.manager.drawFrame(target, swapTarget, true, this.colorMatrix);

        this.manager.drawFrame(target, swapTarget);

        this.copyToGame(swapTarget);
        // this.copyToGame(target);
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
        this.load.image('melon', 'assets/sprites/watermelon.png');
        this.load.image('yune', 'assets/sprites/yune.png');
        this.load.image('star', 'assets/sprites/star.png');
    }

    create ()
    {
        const pipeline = this.renderer.pipelines.add('ColorMatrixFX', new ColorMatrixFX(this.game));

        const melon = this.add.image(100, 300, 'melon');
        const yune = this.add.image(400, 350, 'yune');
        const star = this.add.image(700, 300, 'star');

        melon.setPipeline(pipeline);
        // yune.setPipeline(pipeline);
        star.setPipeline(pipeline);

        // pipeline.colorMatrix.brightness(1.2);
        // pipeline.colorMatrix.saturate(2.5);
        // pipeline.colorMatrix.hue(40);
        pipeline.colorMatrix.grayscale(1);
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
