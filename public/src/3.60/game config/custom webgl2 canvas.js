class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/baal-loader.png');
    }

    create ()
    {
        this.add.image(400, 300, 'pic');
    }
}

const contextCreationConfig = {
    alpha: false,
    depth: false,
    antialias: true,
    premultipliedAlpha: true,
    stencil: true,
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false,
    powerPreference: 'default'
};

const myCustomCanvas = document.createElement('canvas');
const myCustomContext = myCustomCanvas.getContext('webgl2', contextCreationConfig);

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid green';

document.body.appendChild(myCustomCanvas);

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    canvas: myCustomCanvas,
    context: myCustomContext,
    scene: Example
};

const game = new Phaser.Game(config);
