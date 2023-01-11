class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('white', 'assets/particles/white-flare.png');
    }

    create ()
    {
        const emitter = this.add.particles(100, 300, 'white', {
            color: [ 0xff0000, 0x00ff00, 0x0000ff ],
            // tintFill: true,
            lifespan: 4000,
            angle: { min: -20, max: 20 },
            speed: 150,
            frequency: 200
        });

        window.emma = emitter;
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
