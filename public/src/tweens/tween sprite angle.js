class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bar', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        const bar = this.add.image(400, 300, 'bar').setOrigin(0, 0.5);

        this.tweens.add({
            targets: bar,
            angle: '+=360',
            duration: 5000,
            repeat: -1
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
