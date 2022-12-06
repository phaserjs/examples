class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const image1 = this.add.image(100, 90, 'block');
        const image2 = this.add.image(150, 90, 'block');
        const image3 = this.add.image(200, 90, 'block');
        const image4 = this.add.image(250, 90, 'block');

        const container = this.add.container(300, 300, [ image1, image2, image3, image4 ]);

        container.bringToTop(image2);
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
