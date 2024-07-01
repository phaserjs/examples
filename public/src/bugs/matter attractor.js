// const { Physics } = require("phaser");

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sun', 'assets/tests/space/sun.png');
        this.load.image('alien', 'assets/sprites/space-baddie.png');
    }

    create ()
    {
        //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:
        // this.matter.enableAttractorPlugin();

        this.matter.world.setBounds();

        this.aliens = this.matter.add.imageStack('alien', null, 0, 500, 50, 2, 0, 0, {
            mass: 1,
            ignorePointer: true
        });

        this.sun = this.matter.add.image(400, 200, 'sun', null, {
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

    update ()
    {
        const bodies = this.aliens.bodies;
        const force = { x: 0, y: -0.00001 };

        for (let i = 0; i < bodies.length; i++) 
        {
            // Phaser.Physics.Matter.Matter.Body.applyForce(bodies[i], bodies[i].position, force);
        }
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
