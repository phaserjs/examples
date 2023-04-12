class Example extends Phaser.Scene
{
    t = 16;
    i = 0;
    y = 0;
    x = 0;

    preload ()
    {
        this.load.image('ball', 'assets/demoscene/blue_ball.png');
    }

    create ()
    {
        const blitter = this.add.blitter(0, 0, 'ball');

        blitter.createFromCallback(this.placeBob.bind(this), this.t * 7);
    }

    placeBob (bob)
    {
        if (this.i % 16 === 0)
        {
            this.x += 96;
            this.y = 0;
        }

        this.y += 32;

        bob.x = this.x + (Math.sin(this.y) * 16);
        bob.y = this.y;

        this.i++;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
