class Example extends Phaser.Scene
{
    player;
    cursors;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.add.image(400, 300, 'block');
    }

    update ()
    {
        //  Horizontal movement every 250ms
        if (this.input.keyboard.checkDown(this.cursors.left, 250))
        {
            this.player.x -= 32;
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 250))
        {
            this.player.x += 32;
        }

        //  Vertical movement every 150ms
        if (this.input.keyboard.checkDown(this.cursors.up, 150))
        {
            this.player.y -= 32;
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 150))
        {
            this.player.y += 32;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    scene: Example
};

const game = new Phaser.Game(config);
