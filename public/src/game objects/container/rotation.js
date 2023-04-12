class Example extends Phaser.Scene
{
    container;

    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        //  Here we've got 1 of each game object:
        const image = this.add.image(0, 0, 'lemming');
        const text = this.add.text(60, 0, 'Oh No!', { font: '16px Courier', fill: '#00ff00' });

        this.container = this.add.container(200, 300, [ image, text ]);
    }

    update ()
    {
        this.container.rotation += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
