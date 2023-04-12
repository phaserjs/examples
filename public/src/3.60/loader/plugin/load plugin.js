class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.scenePlugin('FractalPlugin', 'assets/loader-tests/FractalScenePlugin.js', 'fractalPlugin', 'fractals');
    }

    create ()
    {
        const image = this.fractals.create(400, 300, 256, 256);

        image.setScale(2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

let game = new Phaser.Game(config);
