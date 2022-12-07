class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bar', 'assets/sprites/flectrum.png');
    }

    create ()
    {
        const group = this.add.group({
            key: 'bar',
            repeat: 32,
            setXY: { x: 400, y: 300 },
            setRotation: { value: 0, step: 0.06 },
            setScale: { x: 6 }
        });
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
