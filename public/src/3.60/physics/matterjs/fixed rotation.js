class Example extends Phaser.Scene
{
    block;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        this.block = this.matter.add.image(50, 0, 'block');

        this.block.setFrictionAir(0.001);
        this.block.setBounce(0.6);

        const ground = this.matter.add.image(400, 400, 'platform', null, { isStatic: true });

        ground.setScale(2, 0.5);
        ground.setAngle(10);
        ground.setFriction(0);
    }

    update ()
    {
        if (this.block.y > 600)
        {
            this.block.setPosition(50, 0);
            this.block.setVelocity(0, 0);
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
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
