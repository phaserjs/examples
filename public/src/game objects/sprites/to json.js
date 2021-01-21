class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const bunny = this.add.sprite(400, 300, 'bunny');

        //  Set a few properties:

        bunny.angle = 25;

        bunny.setScale(1.3);

        bunny.alpha = 0.9;

        bunny.flipY = true;

        console.log(bunny.toJSON());

        // console.log(JSON.stringify(bunny));
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [Example]
};

const game = new Phaser.Game(config);
