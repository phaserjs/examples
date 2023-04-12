class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/deepblue.png');
        this.load.image('splat', 'assets/pics/splat1.png');
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const mask = this.add.bitmapMask(null, 400, 300, 'splat');

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.add.image(x, y, 'atari').setMask(mask);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
