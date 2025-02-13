import { Player } from '../gameObjects/Player.js';
import { Star } from '../gameObjects/Star.js';
import { Bomb } from '../gameObjects/Bomb.js';
import { Platform } from '../gameObjects/Platform.js';
import { MysteryBox } from '../gameObjects/MysteryBox.js';
import { TreasureBox } from '../gameObjects/TreasureBox.js';
import { Coin } from '../gameObjects/Coin.js';
import { Key } from '../gameObjects/Key.js';
import { Score } from '../gameObjects/Score.js';

export class Game extends Phaser.Scene
{
    gameOver = false;
    cursors;
    platforms;
    interactive;
    interactiveSolid;
    bombs;
    stars;
    player;

    constructor()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('sky', 'assets/images/clouds.png');
        this.load.image('ground', 'assets/images/platform.png');
        this.load.image('bomb', 'assets/images/bomb.png');
        this.load.spritesheet('fantasy', 'assets/images/fantasy-tiles.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('dude', 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.bitmapFont('nokia16', 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');
        this.load.bitmapFont('nokia', 'assets/fonts/nokia.png', 'assets/fonts/nokia.xml');
    }

    create ()
    {
        this.initGameUi();
        this.initBackgrounds();
        this.initCamera();

        this.interactive = this.add.group();
        this.interactiveSolid = this.add.group();

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.add.group();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.add(new Platform(this, 0, 536, 39, 2));
        this.platforms.add(new Platform(this, 480, 440, 3));
        this.platforms.add(new Platform(this, 544, 344, 3));
        this.platforms.add(new Platform(this, 64, 224, 8));
        this.platforms.add(new Platform(this, 750, 240, 13));
        this.platforms.add(new Platform(this, 544, 96));
        this.platforms.add(new Platform(this, 376, 224, 1, 3));
        this.platforms.add(new Platform(this, 376, 96));

        // The player and its settings
        this.initPlayer();
        this.initAnimations();

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.add.group();

        // add 12 stars to the group
        for (let i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            const star = new Star(this, 12 + (i * 192), 0);
            this.stars.add(star);
        }

        this.bombs = this.add.group();

        //  Collide the player and the stars with the platforms
        this.physics.add.overlap(this.player, this.interactive, this.interact);
        this.physics.add.collider(this.player, this.interactiveSolid, this.interact);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

        // this.addBomb();
        this.addMysteryBoxes();
        this.addTreasureBoxes();
    }

    update ()
    {
        if (this.gameOver)
        {
            return;
        }

        if (this.cursors.left.isDown)
        {
            this.player.moveLeft();
        }
        else if (this.cursors.right.isDown)
        {
            this.player.moveRight()
        }
        else
        {
            this.player.idle();
        }

        if (this.cursors.up.isDown)
        {
            this.player.jump();
        }
    }

    initGameUi ()
    {
        this.scene.launch('GameUi');
    }

    initBackgrounds ()
    {
        for (let i = 0; i < 2; i++)
        {
            this.add.image(i * this.scale.width, 0, 'sky').setOrigin(0);
        }
    }

    initCamera ()
    {
        const worldWidth = this.scale.width * 2;
        const worldHeight = this.scale.height;

        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
        this.physics.world.setBounds(0, -200, worldWidth, worldHeight + 200);
    }

    initPlayer ()
    {
        this.player = new Player(this, 100, 450);
        this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    }

    initAnimations ()
    {
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('fantasy', { start: 42, end: 47 }),
            frameRate: 12,
            repeat: -1
        });
    }

    interact (player, interactObject)
    {
        interactObject.activate();
    }

    collectStar (player, star)
    {
        star.collect();

        //  Add and update the score
        this.addScore(star.x, star.y, 10);

        if (this.stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            this.stars.children.iterate(child =>
            {

                child.reset();

            });
        }
    }

    addBomb ()
    {
        const x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        const bomb = new Bomb(this, x, 16);
        this.bombs.add(bomb);
    }

    addMysteryBoxes ()
    {
        this.interactiveSolid.add(new MysteryBox(this, 352, 408));
        this.interactiveSolid.add(new MysteryBox(this, 384, 408));

        this.interactiveSolid.add(new MysteryBox(this, 448, 312));
        this.interactiveSolid.add(new MysteryBox(this, 480, 312));
    }

    addTreasureBoxes ()
    {
        this.interactive.add(new TreasureBox(this, 672, 504));
    }

    addCoin (x, y)
    {
        new Coin(this, x, y);
    }

    addKey (x, y)
    {
        new Key(this, x, y);
        this.events.emit('updateKeys', 1);
    }

    addScore (x, y, points)
    {
        new Score(this, x, y, points);
        this.events.emit('updateScore', points);
    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.idle();

        this.gameOver = true;
    }
}
