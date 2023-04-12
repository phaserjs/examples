class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('tree', 'assets/sprites/skullcandle.png');
        this.load.image('cave', 'assets/sprites/cave.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const circle = new Phaser.Geom.Circle(400, 300, 220);

        const trees = [];

        for (let i = 0; i < 14; i++)
        {
            trees.push(this.add.image(0, 0, 'tree'));
        }

        //  The starting angle
        const startAngle = Phaser.Math.DegToRad(135);

        //  The end angle can overshoot 360 as required
        const endAngle = Phaser.Math.DegToRad(425);

        Phaser.Actions.PlaceOnCircle(trees, circle, startAngle, endAngle);

        //  Depth sort based on y value
        trees.forEach(tree => {
            tree.setDepth(tree.y);
        });

        this.add.image(400, 300, 'cave');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    roundPixels: true,
    scene: Example
};

const game = new Phaser.Game(config);
