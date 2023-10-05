class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/crate32.png');
        this.load.image('ice', 'assets/sprites/block-ice.png');
        this.load.image('be', 'assets/sprites/beball1.png');
    }

    create ()
    {
        this.player = this.physics.add.sprite(400, 300, 'be');

        this.player.setCollideWorldBounds(true);
        this.player.setPushable(false);

        const boxes = [];

        for (let i = 0; i < 16; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            const box = this.physics.add.image(x, y, 'block');

            box.setCollideWorldBounds(true);
            // box.setDrag(1000);
            box.body.slideFactor.set(0, 0);

            boxes.push(box);
        }

        for (let i = 0; i < 16; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            const box = this.physics.add.image(x, y, 'ice').setScale(0.125);

            box.setCollideWorldBounds(true);
            box.setDrag(100);
            box.setBounce(1);

            boxes.push(box);
        }

        let playerIsNPC = false;

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.player, boxes, null, (player, box) => {

            if (playerIsNPC)
            {
                box.setPushable(false);
            }
            else
            {
                box.setPushable(true);
            }

            return true;

        });

        this.input.on('pointerdown', () => {

            playerIsNPC = !playerIsNPC;

            if (playerIsNPC)
            {
                this.player.setTint(0xff0000);
            }
            else
            {
                this.player.clearTint();
            }

        });
    }

    update ()
    {
        this.player.setVelocity(0, 0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(200);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(200);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
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
