class Example extends Phaser.Scene
{
    cursors;
    currentPlayer;
    player2;
    player1;

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

        const ground = this.physics.add.staticGroup();

        ground.create(400, 568, 'ground').setScale(2).refreshBody();

        this.player1 = this.physics.add.sprite(100, 450, 'dude').setBounce(0.2).setCollideWorldBounds(true);
        this.player2 = this.physics.add.sprite(500, 450, 'dude').setTint(0xff0000).setBounce(0.2).setCollideWorldBounds(true);

        this.player1.name = 'Purple';
        this.player2.name = 'Red';

        this.player2.setPushable(false);

        this.currentPlayer = this.player1;

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

        this.physics.add.collider(this.player1, ground);
        this.physics.add.collider(this.player2, ground);

        this.physics.add.collider(this.player1, this.player2);

        // this.physics.add.collider(player2, player1);

        window.body1 = this.player1.body;
        window.physics = this.physics;
        window.showit = false;

        this.input.on('pointerdown', () =>
        {

            if (this.currentPlayer === this.player1)
            {
                this.currentPlayer = this.player2;
            }
            else
            {
                this.currentPlayer = this.player1;
            }

        }, this);

        this.add.text(10, 10, 'Click to change character', { fontSize: '22px', fill: '#ecf0f1' });
    }

    update ()
    {
        if (this.cursors.left.isDown)
        {
            this.currentPlayer.setVelocityX(-160);

            this.currentPlayer.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.currentPlayer.setVelocityX(160);

            this.currentPlayer.anims.play('right', true);
        }
        else
        {
            this.currentPlayer.setVelocityX(0);

            this.currentPlayer.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.currentPlayer.body.touching.down)
        {
            this.currentPlayer.setVelocityY(-330);

            window.showit = true;
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
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
