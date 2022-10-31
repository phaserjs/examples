class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/pics/neoncircle.png');
        this.load.image('particle', 'assets/sprites/particle1.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        //  Create our sprites to place within the circle
        const particles = [];

        for (let i = 0; i < 512; i++)
        {
            particles.push(this.add.image(0, 0, 'particle'));
        }

        //  The Circle geometry object
        const circle = new Phaser.Geom.Circle(400, 300, 210);

        //  Randomly position the sprites within the circle
        Phaser.Actions.RandomCircle(particles, circle);
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
