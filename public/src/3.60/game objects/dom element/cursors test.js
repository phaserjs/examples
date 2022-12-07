class Example extends Phaser.Scene
{
    element;
    player;
    cursors;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.element = this.add.dom(400, 300, 'div', 'font-size: 96px', '💩').setOrigin(0);

        this.physics.add.existing(this.element, false);

        this.element.body.setCollideWorldBounds(true);
    }

    update ()
    {
        this.element.body.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.element.body.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.element.body.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.element.body.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.element.body.setVelocityY(300);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    width: 800,
    height: 600,
    dom: {
        createContainer: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
