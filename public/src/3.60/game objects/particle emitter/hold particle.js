class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient26.png');
        this.load.image('ball', 'assets/demoscene/green_ball.png');
        this.load.image('platform', 'assets/particles/platform.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.image(-100, 500, 'platform').setOrigin(0, 0);
        this.add.image(412, 500, 'platform').setOrigin(0, 0);

        this.add.particles(0, -32, 'ball', {
            x: { min: 0, max: 800 },
            gravityY: 200,
            lifespan: 2235,
            hold: 2000,
            sortProperty: 'lifeT',
            sortOrderAsc: true
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
