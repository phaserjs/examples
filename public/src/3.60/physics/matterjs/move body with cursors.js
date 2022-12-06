class Example extends Phaser.Scene
{
    cursors;
    image;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.image = this.matter.add.image(400, 300, 'block');

        this.matter.add.image(700, 200, 'block').setBounce(0.6);
        this.matter.add.image(100, 500, 'block').setBounce(0.6);

        this.matter.world.setBounds(0, 0, 800, 600);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.image.setVelocityX(-10);
        }
        else if (this.cursors.right.isDown)
        {
            this.image.setVelocityX(10);
        }
        else
        {
            this.image.setVelocityX(0);
        }

        if (this.cursors.up.isDown)
        {
            this.image.setVelocityY(-10);
        }
        else if (this.cursors.down.isDown)
        {
            this.image.setVelocityY(10);
        }
        else
        {
            this.image.setVelocityY(0);
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
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
