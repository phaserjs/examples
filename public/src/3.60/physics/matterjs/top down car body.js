class Example extends Phaser.Scene
{
    vec = Phaser.Physics.Matter.Matter.Vector;
    cursors;
    tracker2;
    tracker1;
    car;

    preload ()
    {
        this.load.image('soil', 'assets/textures/soil.png');
        this.load.image('car', 'assets/sprites/car-yellow.png');
    }

    create ()
    {
        this.add.tileSprite(400, 300, 800, 600, 'soil');

        this.car = this.matter.add.image(400, 300, 'car');
        this.car.setAngle(-90);
        this.car.setFrictionAir(0.2);
        this.car.setMass(10);

        this.matter.world.setBounds(0, 0, 800, 600);

        this.tracker1 = this.add.rectangle(0, 0, 4, 4, 0x00ff00);
        this.tracker2 = this.add.rectangle(0, 0, 4, 4, 0xff0000);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        const point1 = this.car.getTopRight();
        const point2 = this.car.getBottomRight();

        this.tracker1.setPosition(point1.x, point1.y);
        this.tracker2.setPosition(point2.x, point2.y);
        
        const speed = 0.03;
        const angle = this.vec.angle(point1, point2);
        const force = {x: Math.cos(angle) * speed, y: Math.sin(angle) * speed};
        if (this.cursors.up.isDown)
        {
            this.car.thrust(0.05);
            this.steer(this.vec.neg(force));
        }
        else if (this.cursors.down.isDown)
        {
            this.car.thrustBack(0.05);
            this.steer(force);
        }
    }

    steer (force)
    {
        if (this.cursors.left.isDown)
        {
            Phaser.Physics.Matter.Matter.Body.applyForce(this.car.body, this.car.getTopRight(), force);
        }
        else if (this.cursors.right.isDown)
        {
            Phaser.Physics.Matter.Matter.Body.applyForce(this.car.body, this.car.getBottomRight(), this.vec.neg(force));
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
