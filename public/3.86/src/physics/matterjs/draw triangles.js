class Example extends Phaser.Scene
{
    create ()
    {
        this.matter.world.setBounds();

        const triSize = 8;
        const lastPosition = new Phaser.Math.Vector2();
        const options = { friction: 0.005, frictionAir: 0, restitution: 1 };

        this.input.on('pointerdown', function (pointer)
        {

            lastPosition.x = pointer.x;
            lastPosition.y = pointer.y;

            this.matter.add.polygon(pointer.x, pointer.y, 3, triSize, options);

        }, this);

        this.input.on('pointermove', function (pointer)
        {

            if (pointer.isDown)
            {
                const x = pointer.x;
                const y = pointer.y;

                if (Phaser.Math.Distance.Between(x, y, lastPosition.x, lastPosition.y) > triSize * 1.5)
                {
                    lastPosition.x = x;
                    lastPosition.y = y;

                    this.matter.add.polygon(pointer.x, pointer.y, 3, triSize, options);
                }
            }

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
                y: 0.02
            },
            enableSleep: true,
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
