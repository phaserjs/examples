class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('player', 'assets/sprites/ship.png');
        this.load.image('ship1', 'assets/sprites/bsquadron1.png');
        this.load.image('ship2', 'assets/sprites/bsquadron2.png');
        this.load.image('ship3', 'assets/sprites/bsquadron3.png');
    }

    create ()
    {
        const player = this.physics.add.image(400, 500, 'player');

        this.pool = [];
        this.active = [];

        //  Create a pool of 100 bodies.
        //  To achieve this, we need a dummy Game Object they can pull default values from.

        const dummy = this.add.image();
        const world = this.physics.world;

        for (let i = 0; i < 100; i++)
        {
            const body = new Phaser.Physics.Arcade.Body(world, dummy);

            this.pool.push(body);
        }

        //  Every second we'll release an enemy
        this.time.addEvent({ delay: 1000, callback: () => this.releaseEnemy(), loop: true });

        // this.physics.add.collider(sprite, balls);
    }

    update ()
    {
        const world = this.physics.world;

        //  Check which enemies have left the screen
        for (let i = this.active.length - 1; i >= 0; i--)
        {
            const enemy = this.active[i];

            if (enemy.y > 640)
            {
                console.log(enemy);

                //  Recycle this body
                const body = enemy.body;

                world.tree.remove(body);
                world.bodies.delete(body);

                body.enable = false;
                body.gameObject = undefined;

                this.pool.push(body);

                //  Recycle the sprite?
                enemy.body = undefined;
                enemy.destroy();

                this.active.splice(i, 1);
            }
        }
    }

    releaseEnemy ()
    {
        const pool = this.pool;

        const body = pool.pop();

        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(-1200, 0);
        const frame = Phaser.Math.Between(1, 3);

        const enemy = this.add.image(x, y, `ship${frame}`);

        //  Link the sprite to the body
        enemy.body = body;
        body.gameObject = enemy;
        body.sourceWidth = enemy.frame.realWidth;
        body.sourceHeight = enemy.frame.realHeight;

        //  Sync the bounds
        body.updateBounds();

        //  Now you could call 'setCircle' etc as required

        //  Insert the body back into the physics world
        this.physics.world.add(body);

        //  Give it some velocity
        body.setVelocity(0, Phaser.Math.Between(200, 400));

        //  Add to our active pool
        this.active.push(enemy);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
