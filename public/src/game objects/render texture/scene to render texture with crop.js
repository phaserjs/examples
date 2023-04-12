class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'gameScene', active: true });

        this.player = null;
        this.cursors = null;
        this.score = 0;
        this.scoreText = null;
    }

    preload ()
    {
        this.load.image('sky', 'src/games/firstgame/assets/sky.png');
        this.load.image('ground', 'src/games/firstgame/assets/platform.png');
        this.load.image('star', 'src/games/firstgame/assets/star.png');
        this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
        this.load.spritesheet('dude', 'src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        this.add.image(400, 300, 'sky');

        const platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        const player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

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

        const stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(child =>
        {

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);

        this.physics.add.overlap(player, stars, this.collectStar, null, this);

        this.player = player;

        //  Start the RT Scene
        this.scene.launch('renderScene');
    }

    update ()
    {
        const cursors = this.cursors;
        const player = this.player;

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }

    collectStar (player, star)
    {
        star.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
    }
}

class RenderScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'renderScene', active: false });

        this.rt;
        this.graphics;
        this.offset;
    }

    create ()
    {
        //  Hide the Game Scene so it doesn't render (as we don't need it rendering twice)
        this.scene.setVisible(false, 'gameScene');

        this.rt = this.add.renderTexture(400, 300, 800, 600);

        //  Tint the whole render texture
        this.rt.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        this.graphics = this.add.graphics();

        const cropWidth = 290;
        const cropHeight = 120;

        this.rt.setCrop(200, 200, cropWidth, cropHeight);

        this.offset = this.rt.getTopLeft();

        this.input.on('pointermove', function (pointer)
        {

            this.rt.setCrop(
                (pointer.x - this.offset.x) - cropWidth / 2,
                (pointer.y - this.offset.y) - cropHeight / 2,
                cropWidth,
                cropHeight
            );

        }, this);
    }

    update (time, delta)
    {
        const gameScene = this.scene.get('gameScene');

        this.rt.clear();

        this.rt.draw(gameScene.children, 0, 0);

        const rt = this.rt;
        const offset = this.offset;

        this.graphics.clear();
        this.graphics.lineStyle(1, 0x00ff00);
        this.graphics.strokeRect(offset.x + rt._crop.x, offset.y + rt._crop.y, rt._crop.width, rt._crop.height);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [ GameScene, RenderScene ]
};

const game = new Phaser.Game(config);
