class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/normal-maps/stones.png');
        this.load.image('gem', 'assets/normal-maps/gem2.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.particles(0, 570, 'gem', {
            x: { start: 0, end: 750, random: true },
            scale: 0.5,
            lifespan: 2500,
            gravityY: -200,
            quantity: 2,
            sortProperty: 'y',
            sortOrderAsc: false
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
