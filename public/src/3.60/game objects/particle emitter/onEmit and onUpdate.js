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

        this.input.on('pointermove', pointer => {
            pointerX = pointer.worldX;
            pointerY = pointer.worldY;
        });

        this.add.particles(0, 0, 'match3', {
            frame: 'Match3_Icon_23',
            x: {
                onEmit: (particle, key, t, value) => {
                    return pointerX;
                },
                onUpdate: (particle, key, t, value) => {
                    return value;
                }
            },
            y: {
                onEmit: (particle, key, t, value) => {
                    return pointerY;
                },
                onUpdate: (particle, key, t, value) => {
                    //  add to the y value based on particles remaining life
                    //  this creates the effect of gravity, without using gravity
                    return value + (t * 10);
                }
            },
            scale: { start: 0.5, end: 0 },
            speed: 200,
            lifespan: 2000
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
