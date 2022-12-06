class Example extends Phaser.Scene
{
    transformMatrix;
    frame;
    tint;
    pos;

    preload ()
    {
        this.load.image('pic', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.frame = this.textures.getFrame('pic');

        this.tint = Phaser.Renderer.WebGL.Utils.getTintAppendFloatAlpha(16777215, 1);

        this.transformMatrix = new Phaser.GameObjects.Components.TransformMatrix();

        this.pos = new Phaser.Math.Vector2(0, 0);

        this.tweens.add({
            targets: this.pos,
            props: {
                x: {
                    value: 32,
                    ease: 'Linear',
                    duration: 6000
                },
                y: {
                    value: 472,
                    ease: 'Sine.inOut',
                    duration: 3000
                }
            },
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        const pipeline = this.renderer.pipelines.MULTI_PIPELINE;

        for (let i = 0; i < 12; i++)
        {
            pipeline.batchTextureFrame(
                this.frame,
                i * 64, this.pos.y - (Math.sin(this.pos.x + i) * 16),
                this.tint, 1,
                this.transformMatrix
            );
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
