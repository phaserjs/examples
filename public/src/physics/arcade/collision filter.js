class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('blockA', 'assets/sprites/blockA.png');
        this.load.image('blockB', 'assets/sprites/blockB.png');
        this.load.image('blockC', 'assets/sprites/blockC.png');
        this.load.image('blockD', 'assets/sprites/blockD.png');
    }

    create ()
    {
        const blockA = this.physics.add.sprite(200, 300, 'blockA');
        const blockB = this.physics.add.sprite(400, 300, 'blockB');
        const blockC = this.physics.add.sprite(600, 300, 'blockC');

        const category1 = this.physics.nextCategory();

        // blockA.setCollisionCategory(category1);
        // blockB.setCollisionCategory(category1);

        // blockA.setCollidesWith(category1);
        // blockB.setCollidesWith(category1);

        const blocks = [ blockB, blockC ];

        this.physics.add.collider(blockA, blocks);

        this.input.once('pointerdown', () => {

            blockA.setVelocityX(200);

        });
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
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
