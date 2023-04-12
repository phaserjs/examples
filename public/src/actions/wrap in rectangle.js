class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.wrapRect;
        this.aliens = [];
    }

    preload ()
    {
        this.load.image('monitor', 'assets/pics/monitor.png');
        this.load.image('alien', 'assets/sprites/space-baddie.png');
    }

    create ()
    {
        //  This is our 'wrapping rectangle'
        //  When a sprite leaves this, it'll be wrapped around
        this.wrapRect = new Phaser.Geom.Rectangle(214, 132, 367, 239);

        this.add.rectangle(this.wrapRect.x, this.wrapRect.y, this.wrapRect.width, this.wrapRect.height, 0x0094bf).setOrigin(0, 0);

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(this.wrapRect.left, this.wrapRect.right);
            const y = Phaser.Math.Between(this.wrapRect.top, this.wrapRect.bottom);

            this.aliens.push(this.add.image(x, y, 'alien'));
        }

        this.add.image(400, 300, 'monitor');
    }

    update ()
    {
        //  Move all the sprites
        Phaser.Actions.IncXY(this.aliens, 1.5, 2.5, 0.04);

        //  Wrap the sprites within our wrapping rectangle, with an 8px buffer
        Phaser.Actions.WrapInRectangle(this.aliens, this.wrapRect, 8);
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
