class Example extends Phaser.Scene
{
    block;
    cursors;
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        this.block = this.matter.add.image(400, 50, 'block', null, { ignoreGravity: true });
        this.block.setFixedRotation();
        this.block.setMass(500);

        var y = 150;
        var prev = this.block;

        for (var i = 0; i < 12; i++)
        {
            var ball = this.matter.add.image(400, y, 'ball', null, { shape: 'circle', mass: 0.1 });

            this.matter.add.joint(prev, ball, (i === 0) ? 90 : 35, 0.4);

            prev = ball;

            y += 18;
        }

        this.matter.add.mouseSpring();

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.block.setVelocityX(-20);
        }
        else if (this.cursors.right.isDown)
        {
            this.block.setVelocityX(20);
        }
        else
        {
            this.block.setVelocityX(0);
        }

        if (this.cursors.up.isDown)
        {
            this.block.setVelocityY(-20);
        }
        else if (this.cursors.down.isDown)
        {
            this.block.setVelocityY(20);
        }
        else
        {
            this.block.setVelocityY(0);
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
        default: 'matter'
    },
    scene: Example
};

const game = new Phaser.Game(config);
