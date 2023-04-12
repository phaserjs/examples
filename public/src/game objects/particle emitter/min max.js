class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/sky2.png');
        this.load.image('rain', 'assets/sprites/rain.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.particles(0, 100, 'rain', {
            x: { min: 100, max: 640 },
            quantity: 2,
            lifespan: 2500,
            gravityY: 200
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
