class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        this.add.text(10, 10, 'Hello World');
        this.add.text(10, 100, 'Hello World');
        this.add.text(10, 200, 'Hello World');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
