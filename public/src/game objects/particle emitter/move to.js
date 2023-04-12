class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient26.png');
        this.load.image('ball', 'assets/demoscene/green_ball.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.particles(0, 0, 'ball', {
            x: { min: 300, max: 500 },
            y: -32,
            advance: 2000,
            moveToX: 400,
            moveToY: 570,
            lifespan: 2000,
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
