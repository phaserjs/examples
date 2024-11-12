class Example extends Phaser.Scene
{
    create ()
    {
        this.matter.world.setBounds();

        const sides = 6;
        const size = 14;
        const distance = size * 4;
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

                    current = this.matter.add.polygon(pointer.x, pointer.y, sides, size, options);

                    this.matter.add.constraint(previous, current, distance, stiffness);

                    previous = current;
                }
            }

        }, this);

        this.input.on('pointerup', pointer =>
        {

            previous.isStatic = true;
            previous.ignoreGravity = true;

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
                y: 0.1
            },
            enableSleep: true,
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
