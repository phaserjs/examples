class Example extends Phaser.Scene
{
    cursors;
    player;

    preload ()
    {
        this.load.image('box', 'assets/sprites/box-item-boxed.png');
        this.load.image('sky', 'src/games/firstgame/assets/sky.png');
        this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
        this.load.image('ground', 'src/games/firstgame/assets/platform.png');
        this.load.image('star', 'src/games/firstgame/assets/star.png');
        this.load.spritesheet('boom', 'assets/sprites/explosion.png', { frameWidth: 64, frameHeight: 64, endFrame: 23 });
        this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    create ()
    {
        this.createAnims();

        this.add.image(400, 300, 'sky');

        const box = this.physics.add.staticImage(400, 450, 'box');

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.explosion = this.add.sprite(0, 0, 'boom').setVisible(false);

        this.bombs = this.physics.add.group({
            key: 'bomb',
            quantity: 10,
            setXY: { x: 10, y: 10, stepX: 80, stepY: 40 },
            bounceX: 0.8,
            bounceY: 0.8,
            collideWorldBounds: true,
            velocityX: 50
        });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        const bombsCollider = this.physics.add.overlap(this.player, this.bombs, (player, bomb) =>
        {
            this.explosion.copyPosition(bomb).play('explode');
            bomb.destroy();
        });

        this.physics.add.overlap(this.player, box, (player, _box) =>
        {
            bombsCollider.active = false;
            player.setTintFill(0xffff00);
            _box.destroy();
            this.time.delayedCall(5000, () =>
            {
                bombsCollider.active = true;
                player.clearTint();
            });
        });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }
    }

    createAnims ()
    {
        this.anims.create({
            key: 'explode',
            frames: 'boom',
            frameRate: 20,
            showOnStart: true,
            hideOnComplete: true
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
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
            debug: false,
            gravity: { y: 300 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
