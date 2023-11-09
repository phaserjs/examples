class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/atlas/nine-slice.png', 'assets/atlas/nine-slice.json');
    }

    create ()
    {
        this.add.nineslice(400, 300, 'ui', 'blue-box', 600, 400);

        this.add.nineslice(400, 300, 'ui', 'flectrum', 600);

        this.add.nineslice(400, 300, 'ui', 'button-bg');

        // this.add.nineslice(400, 300, 'ui', 'copy-that-floppy');
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
