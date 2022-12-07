class Example extends Phaser.Scene
{
    text;
    spriteBounds;
    group;
    player;
    cursors;
    controls;

    preload ()
    {
        this.load.image('chunk', 'assets/sprites/rain.png');
        this.load.image('crate', 'assets/sprites/crate.png');
    }

    create ()
    {
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000044);
        graphics.fillRect(0,140,800,460);

        this.physics.world.setBounds(0, 0, 800, 600);

        this.spriteBounds = Phaser.Geom.Rectangle.Inflate(Phaser.Geom.Rectangle.Clone(this.physics.world.bounds), -10, -200);
        this.spriteBounds.y += 100;

        this.group = this.physics.add.group();
        this.group.runChildUpdate = false;

        //  Create 10,000 bodies at a rate of 100 bodies per 500ms
        this.time.addEvent({ delay: 500, callback: this.release, callbackScope: this, repeat: (10000 / 100) - 1 });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.image(400, 100, 'crate');

        this.player.setImmovable();
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, this.group);

        this.text = this.add.text(10, 10, 'Total: 0', { font: '16px Courier', fill: '#ffffff' });
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

    release ()
    {
        for (let i = 0; i < 100; i++)
        {
            const pos = Phaser.Geom.Rectangle.Random(this.spriteBounds);

            const block = this.group.create(pos.x, pos.y, 'chunk');

            block.setBounce(1);
            block.setCollideWorldBounds(true);
            block.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-100, -200));
            block.setMaxVelocity(300);
            block.setBlendMode(1);
        }

        this.text.setText(`Total: ${this.group.getLength()}`);
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
            useTree: false,
            gravity: { y: 100 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
