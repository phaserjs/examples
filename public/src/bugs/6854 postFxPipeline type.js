class TestPostFX extends Phaser.Renderer.WebGL.Pipelines.PostFXPipeline {
}

class Example extends Phaser.Scene
{
    create()
    {
        console.log('create');
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    pipeline: TestPostFX
};

const game = new Phaser.Game(config);
