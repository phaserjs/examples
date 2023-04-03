class Example extends Phaser.Scene
{
    cursors;
    ship;

    preload ()
    {
        this.load.image('ship', 'assets/sprites/x2kship.png');
        this.load.atlas('space', 'assets/tests/space/space.png', 'assets/tests/space/space.json');
    }

    create ()
    {
        const emitter = this.add.particles(0, 0, 'space', {
            frame: 'blue',
            speed: {
                onEmit: (particle, key, t, value) => this.ship.body.speed
            },
            lifespan: {
                onEmit: (particle, key, t, value) => Phaser.Math.Percent(this.ship.body.speed, 0, 300) * 200000
            },
            alpha: {
                onEmit: (particle, key, t, value) => Phaser.Math.Percent(this.ship.body.speed, 0, 300) * 1000
            },
            scale: { start: 1.0, end: 0 },
            blendMode: 'ADD'
        });

        this.ship = this.matter.add.image(400, 300, 'ship');

        this.ship.setFixedRotation();
        this.ship.setAngle(270);
        this.ship.setFrictionAir(0.05);
        this.ship.setMass(30);

        emitter.startFollow(this.ship);

        this.matter.world.setBounds(0, 0, 800, 600);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.ship.thrustLeft(0.1);
        }
        else if (this.cursors.right.isDown)
        {
            this.ship.thrustRight(0.1);
        }

        if (this.cursors.up.isDown)
        {
            this.ship.thrust(0.1);
        }
        else if (this.cursors.down.isDown)
        {
            this.ship.thrustBack(0.1);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
