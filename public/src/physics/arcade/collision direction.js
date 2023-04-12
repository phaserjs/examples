class Example extends Phaser.Scene
{
    platform;
    cursors;
    ground;
    stars;
    player;

    preload ()
    {
        this.load.image('sky', 'src/games/firstgame/assets/sky.png');
        this.load.image('ground', 'src/games/firstgame/assets/platform.png');
        this.load.image('star', 'src/games/firstgame/assets/star.png');
        this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        this.ground = this.physics.add.staticImage(400, 568, 'ground').setScale(2).refreshBody();

        this.platform = this.physics.add.image(400, 400, 'ground');

        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

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

        this.cursors = this.input.keyboard.createCursorKeys();

        this.stars = this.physics.add.group({
            key: 'star',
            frameQuantity: 12,
            maxSize: 12,
            active: false,
            visible: false,
            enable: false,
            collideWorldBounds: true,
            bounceX: 0.5,
            bounceY: 0.5,
            dragX: 30,
            dragY: 0
        });

        this.physics.add.collider(
            this.player,
            this.platform,
            (player, platform) =>
            {
                if (player.body.touching.up && platform.body.touching.down)
                {
                    this.createStar(
                        player.body.center.x,
                        platform.body.top - 16,
                        player.body.velocity.x,
                        player.body.velocity.y * -3
                    );
                }
            });

        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.stars, this.ground);
        this.physics.add.collider(this.stars, this.platform);

        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-180);

            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(180);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-360);
        }
    }

    collectStar (player, star)
    {
        star.disableBody(true, true);
    }

    createStar (x, y, vx, vy)
    {
        const star = this.stars.get();

        if (!star) { return; }

        star
            .enableBody(true, x, y, true, true)
            .setVelocity(vx, vy);
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
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
