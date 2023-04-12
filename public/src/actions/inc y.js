class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.planes = [];
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/deepblue.png');
        this.load.image('plane', 'assets/sprites/ww2plane.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.cameras.main.setBounds(0, 0, 800, 600);

        for (let i = 0; i < 128; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.planes.push(this.add.image(x, y, 'plane'));
        }
    }

    update ()
    {
        Phaser.Actions.IncY(this.planes, -1, -0.025);

        Phaser.Actions.WrapInRectangle(this.planes, this.cameras.main.getBounds(), 128);
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
