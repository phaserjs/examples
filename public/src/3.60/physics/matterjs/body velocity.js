class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('platform', 'assets/sprites/platform.png');
    }

    create ()
    {
        const block = this.matter.add.image(400, 100, 'block');

        block.setFriction(0.05);
        block.setFrictionAir(0.0005);
        block.setBounce(0.9);

        const ground = this.matter.add.image(400, 550, 'platform', null, { restitution: 0.4, isStatic: true });

        this.input.on('pointerdown', pointer =>
        {

            if (pointer.y > 300)
            {
                block.setVelocity(0, -10);
            }
            else if (pointer.x < 400)
            {
                block.setVelocityX(-8);
            }
            else
            {
                block.setVelocityX(8);
            }

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
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
