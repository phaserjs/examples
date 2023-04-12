class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/tweens/sky.png');
        this.load.atlas('match3', 'assets/atlas/match3.png', 'assets/atlas/match3.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        let pointerX = 400;
        let pointerY = 300;

        this.input.on('pointerdown', pointer => {
            pointerX = pointer.worldX;
            pointerY = pointer.worldY;
        });

        this.add.particles(0, 0, 'match3', {
            x: () => {
                return pointerX;
            },
            y: () => {
                return pointerY;
            },
            frame: 'Match3_Icon_09',
            speed: 200,
            lifespan: 2000,
            gravityY: 200,
            scale: 0.5
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
