class Example extends Phaser.Scene
{
    group;

    preload ()
    {
        this.load.image('bar', 'assets/sprites/flectrum.png');
    }

    create ()
    {
        this.group = this.add.group({ key: 'bar', frameQuantity: 32, setXY: { x: 400, y: 300 }, setScale: { x: 2, y: 6 } });
    }

    update ()
    {
        Phaser.Actions.Rotate(this.group.getChildren(), 0.005, 0.0005);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
