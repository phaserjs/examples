class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('blockA', 'assets/sprites/blockA.png');
        this.load.image('blockB', 'assets/sprites/blockB.png');
        this.load.image('blockC', 'assets/sprites/blockC.png');
    }

    create ()
    {
        const blockA = this.add.sprite(200, 300, 'blockA');
        const blockB = this.add.sprite(400, 300, 'blockB');
        const blockC = this.add.sprite(600, 300, 'blockC');

        const group1 = this.physics.add.group();
        const group2 = this.physics.add.group();

        group1.add(blockA);
        group2.add(blockB);
        group2.add(blockC);

        // Uncomment the lines below to enable the collisions
        // const everything = 2147483647;
        // group1.collisionMask = everything;
        // group2.collisionMask = everything;

        const category1 = this.physics.nextCategory();
        const category2 = this.physics.nextCategory();

        blockA.body.setCollisionCategory(category1);
        blockA.body.addCollidesWith(category2);

        blockB.body.setCollisionCategory(category2);
        blockB.body.addCollidesWith(category1);

        blockC.body.setCollisionCategory(category2);
        blockC.body.addCollidesWith(category1);

        function decimalToBinary (decimal)
        {
            return decimal.toString(2);
        }

        console.log(group1.collisionMask, group2.collisionMask);
        console.log(blockA.body.collisionMask, blockA.body.collisionCategory, decimalToBinary(blockA.body.collisionMask), decimalToBinary(blockB.body.collisionCategory), (blockA.body.collisionMask & blockB.body.collisionCategory) !== 0);
        console.log(blockB.body.collisionMask, blockB.body.collisionCategory, decimalToBinary(blockB.body.collisionMask), decimalToBinary(blockA.body.collisionCategory), (blockB.body.collisionMask & blockA.body.collisionCategory) !== 0);
        console.log(blockC.body.collisionMask, blockC.body.collisionCategory, decimalToBinary(blockC.body.collisionMask), decimalToBinary(blockA.body.collisionCategory), (blockC.body.collisionMask & blockA.body.collisionCategory) !== 0);

        this.physics.add.collider(group1, group2);

        this.input.once('pointerdown', () =>
        {
            blockA.body.setVelocityX(200);
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    background: '#2d2d2d',
    // pixelArt: true,
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
