class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('buttons', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        this.add.nineslice(400, 300, 'buttons', 'blue-box', 600, 400, 16, 16, 32, 16);

        this.add.nineslice(400, 300, 'buttons', 'button-bg', 400, 110, 64, 64);
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

const game = new Phaser.Game(config);
