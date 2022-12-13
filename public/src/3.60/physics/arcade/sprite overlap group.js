class Example extends Phaser.Scene
{
    timedEvent;
    maxHealth = 100;
    currentHealth = 100;
    cursors;
    text;
    healthGroup;
    sprite;

    preload ()
    {
        this.load.image('cat', 'assets/sprites/orange-cat1.png');
        this.load.image('health', 'assets/sprites/firstaid.png');
    }

    create ()
    {
        this.sprite = this.physics.add.image(400, 300, 'cat');

        this.sprite.setCollideWorldBounds(true);

        //  Create 10 random health pick-ups
        this.healthGroup = this.physics.add.staticGroup({
            key: 'health',
            frameQuantity: 10,
            immovable: true
        });

        const children = this.healthGroup.getChildren();

        for (let i = 0; i < children.length; i++)
        {
            const x = Phaser.Math.Between(50, 750);
            const y = Phaser.Math.Between(50, 550);

            children[i].setPosition(x, y);
        }

        this.healthGroup.refresh();

        //  So we can see how much health we have left
        this.text = this.add.text(10, 10, 'Health: 100', { font: '32px Courier', fill: '#000000' });

        //  Cursors to move
        this.cursors = this.input.keyboard.createCursorKeys();

        //  When the player sprite his the health packs, call this function ...
        this.physics.add.overlap(this.sprite, this.healthGroup, this.spriteHitHealth, null, this);

        //  Decrease the health by calling reduceHealth every 50ms
        this.timedEvent = this.time.addEvent({ delay: 50, callback: this.reduceHealth, callbackScope: this, loop: true });
    }

    update ()
    {
        if (this.currentHealth === 0)
        {
            return;
        }

        this.text.setText(`Health: ${this.currentHealth}`);

        this.sprite.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.sprite.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.sprite.setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.sprite.setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.sprite.setVelocityY(200);
        }
    }

    reduceHealth ()
    {
        this.currentHealth--;

        if (this.currentHealth === 0)
        {
            //  Uh oh, we're dead
            this.sprite.body.reset(400, 300);

            this.text.setText('Health: RIP');

            //  Stop the timer
            this.timedEvent.remove();
        }
    }

    spriteHitHealth (sprite, health)
    {
        //  Hide the sprite
        this.healthGroup.killAndHide(health);

        //  And disable the body
        health.body.enable = false;

        //  Add 10 health, it'll never go over maxHealth
        this.currentHealth = Phaser.Math.MaxAdd(this.currentHealth, 10, this.maxHealth);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d6b2d',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
