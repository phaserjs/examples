class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/textures/soil.png');
        this.load.image('tree', 'assets/sprites/tree.png');
    }

    create ()
    {
        this.add.tileSprite(400, 300, 800, 600, 'bg').setTileScale(0.25);

        const circle = new Phaser.Geom.Circle(400, 300, 220);

        const trees = [];

        for (let i = 0; i < 32; i++)
        {
            trees.push(this.add.image(0, 0, 'tree'));
        }

        Phaser.Actions.PlaceOnCircle(trees, circle);

        //  Depth sort based on y value
        trees.forEach(tree => {
            tree.setDepth(tree.y);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
