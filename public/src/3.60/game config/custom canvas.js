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


const myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid red';

document.body.appendChild(myCustomCanvas);

// const myCustomContext = myCustomCanvas.getContext('2d');

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    canvas: document.getElementById('myCustomCanvas'),
    scene: Example
};

const game = new Phaser.Game(config);
