class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/pangball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        const sides = 6;
        const size = 14;
        const distance = size * 2;
        const stiffness = 0.1;
        const lastPosition = new Phaser.Math.Vector2();
        const options = { friction: 0.005, frictionAir: 0, restitution: 1 };
        const pinOptions = { friction: 0, frictionAir: 0, restitution: 0, ignoreGravity: true, inertia: Infinity, isStatic: true };

        let current = null;
        let previous = null;

        this.input.on('pointerdown', function (pointer)
        {

            lastPosition.x = pointer.x;
            lastPosition.y = pointer.y;

            previous = this.matter.add.polygon(pointer.x, pointer.y, sides, size, pinOptions);

        }, this);

        this.input.on('pointermove', function (pointer)
        {

            if (pointer.isDown)
            {
                const x = pointer.x;
                const y = pointer.y;

                if (Phaser.Math.Distance.Between(x, y, lastPosition.x, lastPosition.y) > distance)
                {
                    lastPosition.x = x;
                    lastPosition.y = y;

                    current = this.matter.add.polygon(pointer.x, pointer.y, sides, size, pinOptions);

                    this.matter.add.constraint(previous, current, distance, stiffness);

                    previous = current;
                }
            }

        }, this);

        this.input.once('pointerup', function (pointer)
        {

            this.time.addEvent({
                delay: 1000,
                callback: function ()
                {
                    const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
                    ball.setCircle();
                    ball.setFriction(0.005).setBounce(1);
                },
                callbackScope: this,
                repeat: 100
            });

        }, this);
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
                y: 0.8
            },
            enableSleep: true,
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
