class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', 'assets/sprites/chunk.png');
    }

    create ()
    {
        const triangle1 = new Phaser.Geom.Triangle.BuildEquilateral(200, 90, 280);

        const group1 = this.add.group({ key: 'ball', frameQuantity: 64 });

        Phaser.Actions.PlaceOnTriangle(group1.getChildren(), triangle1);

        const triangle2 = new Phaser.Geom.Triangle.BuildRight(400, 500, 300, 200);

        const group2 = this.add.group({ key: 'ball', frameQuantity: 64 });

        Phaser.Actions.PlaceOnTriangle(group2.getChildren(), triangle2);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
