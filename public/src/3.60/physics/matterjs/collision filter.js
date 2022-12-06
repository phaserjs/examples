class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const blockA = this.matter.add.image(200, 300, 'block').setBounce(1).setFriction(0);
        const blockB = this.matter.add.image(400, 300, 'block');

        const blockC = this.matter.add.image(750, 300, 'block').setStatic(true);
        const blockD = this.matter.add.image(50, 300, 'block').setStatic(true);

        const cat1 = this.matter.world.nextCategory();

        blockA.setCollisionCategory(cat1);
        blockC.setCollisionCategory(cat1);

        const cat2 = this.matter.world.nextCategory();

        blockD.setCollisionCategory(cat2);

        blockA.setCollidesWith([ cat1, cat2 ]);

        // blockA.setCollidesWith(cat1);

        blockA.setVelocityX(25);

        this.matter.world.on('collisionstart', event =>
        {

            event.pairs[0].bodyA.gameObject.setTint(0xff0000);
            event.pairs[0].bodyB.gameObject.setTint(0x00ff00);

        });
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
