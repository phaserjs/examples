class Example extends Phaser.Scene
{
    group;
    player;
    cursors;
    controls;

    preload ()
    {
        this.load.image('chunk', 'assets/sprites/space-baddie.png');
        this.load.image('crate', 'assets/sprites/crate.png');
    }

    create ()
    {
        this.physics.world.setBounds(0, 0, 800 * 1, 600 * 1);

        const bounds = new Phaser.Geom.Rectangle(30, 30, 300, 540);

        this.group = this.physics.add.group({ immovable: true });

        for (let i = 0; i < 50; i++)
        {
            const pos = bounds.getRandomPoint();

            this.group.create(pos.x, pos.y, 'chunk');
        }

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(600, 300, 'crate');

        this.physics.add.collider(this.player, this.group);
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-500);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(500);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
