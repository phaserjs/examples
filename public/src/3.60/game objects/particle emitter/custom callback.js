class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        let pointerX = 400;
        let pointerY = 300;

        this.input.on('pointerdown', pointer => {
            pointerX = pointer.worldX;
            pointerY = pointer.worldY;
        });

        this.add.particles(0, 0, 'crate', {
            x: () => {
                return pointerX;
            },
            y: () => {
                return pointerY;
            },
            speed: 200,
            lifespan: 2000,
            gravityY: 200
        });

        this.add.text(10, 10, 'Click to set emission coordinates');
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
