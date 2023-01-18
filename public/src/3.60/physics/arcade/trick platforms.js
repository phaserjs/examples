class Example extends Phaser.Scene
{
    cursors;
    player;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('sky', 'src/games/firstgame/assets/sky.png');
        this.load.image('ground', 'src/games/firstgame/assets/platform.png');
        this.load.image('star', 'src/games/firstgame/assets/star.png');
        this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        this.createAnims();

        this.physics.world.checkCollision.up = false;
        this.physics.world.checkCollision.down = false;

        this.add.image(400, 300, 'sky');

        const platforms = this.physics.add.group({
            defaultKey: 'ground'
        });

        platforms.create(400, 500);
        platforms.create(450, 400);
        platforms.create(500, 300);
        platforms.create(550, 200);
        platforms.create(600, 100);

        for (const platform of platforms.getChildren())
        {
            platform.body.immovable = true;
            platform.body.moves = false;
        }

        const block = this.physics.add.staticImage(100, 300, 'block');

        this.player = this.physics.add.sprite(100, 150, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        const stars = this.physics.add.group({
            allowGravity: false,
            bounceX: 1,
            bounceY: 1,
            velocityY: 50
        });

        stars.createMultiple([
            { key: 'star', quantity: 6, setXY: { x: 450, y: 150, stepX: 50, stepY: 5 } },
            { key: 'star', quantity: 6, setXY: { x: 400, y: 250, stepX: 50, stepY: 5 } },
            { key: 'star', quantity: 6, setXY: { x: 350, y: 350, stepX: 50, stepY: 5 } }
        ]);

        this.physics.add.collider(this.player, platforms, (player, platform) =>
        {
            platform.body.moves = true;
            platform.body.checkCollision.none = true;
        });

        this.physics.add.collider(this.player, block);

        this.physics.add.collider(stars, platforms);

        this.physics.add.overlap(this.player, stars, this.collectStar, null, this);
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-150);

            this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(150);

            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (up.isDown && this.player.body.onFloor())
        {
            this.player.setVelocityY(-300);
        }

    }

    collectStar (player, star)
    {
        star.disableBody(true, true);
    }

    createAnims ()
    {
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
