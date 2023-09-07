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
        const button = this.add.nineslice(400, 300, 'buttons', 'button-bg', 400, 110, 64, 64);

        button.setInteractive();

        button.on('pointerdown', () => {

            button.setPosition(
                Phaser.Math.Between(100, 700),
                Phaser.Math.Between(100, 500)
            );

        });
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
