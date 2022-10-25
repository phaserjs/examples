class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.wrapRect;
        this.robots = [];
    }

    preload ()
    {
        this.load.image('floor', 'assets/demoscene/checker-floor.png');
        this.load.atlas('robot', 'assets/animations/robo.png', 'assets/animations/robo.json');
    }

    create ()
    {
        this.add.image(400, 600, 'floor').setScale(1.25).setOrigin(0.5, 1);

        //  Create an animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('robot', { prefix: 'Running_', start: 0, end: 14, zeroPad: 3 }),
            frameRate: 18,
            repeat: -1
        });

        //  Create 6 sprites, spaced out horizontally
        for (let i = 0; i < 6; i++)
        {
            const sprite = this.add.sprite(i * 200, 380).play('run');

            this.robots.push(sprite);
        }

        //  This is our 'wrapping rectangle'
        //  When a sprite leaves this, it'll be wrapped around
        this.wrapRect = new Phaser.Geom.Rectangle(0, 0, 800, 600);
    }

    update ()
    {
        //  Move all the sprites forward 2 pixels
        Phaser.Actions.IncX(this.robots, 2);

        //  Wrap the sprites within our wrapping rectangle, with a 200px buffer
        Phaser.Actions.WrapInRectangle(this.robots, this.wrapRect, 200);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000042',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
