class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const image1 = this.add.image(0, -30, 'mushroom').setName('mushroom1');
        const image2 = this.add.image(-40, 30, 'mushroom').setName('mushroom2');
        const image3 = this.add.image(40, 30, 'mushroom').setName('mushroom3');

        const container = this.add.container(400, 300, [ image1, image2, image3 ]);

        //  A Container has a default size of 0x0
        //  so we need to give it a size before enabling a physics body
        container.setSize(128, 64);

        const physicsContainer = this.matter.add.gameObject(container);

        physicsContainer.setFrictionAir(0.001);
        physicsContainer.setBounce(1);

        const blockA = this.matter.add.image(100, 300, 'block').setBounce(1).setFriction(0);
        const blockB = this.matter.add.image(700, 300, 'block').setStatic(true);

        this.input.once('pointerdown', () =>
        {

            physicsContainer.setVelocityX(6);

        });

        const tintOnCollision = (bodyA, bodyB) =>
        {

            if (bodyA.gameObject.list)
            {
                bodyA.gameObject.next?.setTint(0xff0000);
            }
            else if (bodyA.gameObject)
            {
                bodyA.gameObject.setTint(0xff0000);
            }

            if (bodyB.gameObject.list)
            {
                bodyB.gameObject.next?.setTint(0xff0000);
            }
            else if (bodyB.gameObject)
            {
                bodyB.gameObject.setTint(0xff0000);
            }

        };

        physicsContainer.setOnCollide(pair =>
        {

            const bodyA = pair.bodyA;
            const bodyB = pair.bodyB;

            tintOnCollision(bodyA, bodyB);

        });

        //  Or you can do it like this:

        /*
        this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {

            tintOnCollision(bodyA, bodyB);

        });
        */
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
            debug: true,
            gravity: {
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
