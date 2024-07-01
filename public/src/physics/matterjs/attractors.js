class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sun', 'assets/tests/space/sun.png');
        this.load.image('alien', 'assets/sprites/space-baddie.png');
    }

    create ()
    {
        this.matter.world.setBounds();

        this.matter.add.imageStack('alien', null, 0, 500, 50, 2, 0, 0, {
            mass: 1,
            ignorePointer: true
        });

        const sun = this.matter.add.image(400, 200, 'sun', null, {
            shape: {
                type: 'circle',
                radius: 64
            },
            attractors: [
                (bodyA, bodyB) => ({
                    x: (bodyA.position.x - bodyB.position.x) * 0.000001,
                    y: (bodyA.position.y - bodyB.position.y) * 0.000001
                })
            ]
        });

        this.matter.add.mouseSpring();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                scale: 0
            },
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
