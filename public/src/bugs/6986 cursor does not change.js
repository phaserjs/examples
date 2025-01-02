class Example extends Phaser.Scene
{
    constructor() { super('example') }

    create ()
    {
        this.scene.launch('test');
    }
}

class Test extends Phaser.Scene
{
    constructor() { super('test') }

    preload ()
    {
        this.load.image('ball', 'assets/sprites/pangball.png');
    }

    create ()
    {
        console.log('Test Scene');
        const ball = this.add.image(400, 300, 'ball');
        ball.setInteractive({ useHandCursor: true });
        ball.on('pointerdown', () =>
        {
            this.scale.canvas.style.cursor = 'default'; // I had to manually change the cursor.
            this.scene.sleep();
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'phaser-example',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Example, Test]
};

const game = new Phaser.Game(config);