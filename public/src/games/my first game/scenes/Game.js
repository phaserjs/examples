import { Player } from '../gameObjects/Player.js';
import { Star } from '../gameObjects/Star.js';
import { Bomb } from '../gameObjects/Bomb.js';
import { Platform } from '../gameObjects/Platform.js';

export class Game extends Phaser.Scene
{
    scoreText;
    gameOver = false;
    score = 0;
    cursors;
    platforms;
    bombs;
    stars;
    player;

    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('fantasy', 'assets/fantasy-tiles.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    create ()
    {
        //  A simple background for our game
        this.add.image(400, 300, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.add(new Platform(this, 400, 568, 800));
        this.platforms.add(new Platform(this, 600, 400, 416));
        this.platforms.add(new Platform(this, 50, 250, 416));
        this.platforms.add(new Platform(this, 750, 240, 416));
        // this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        //  Now let's create some ledges
        // this.platforms.create(600, 400, 'ground');
        // this.platforms.create(50, 250, 'ground');
        // this.platforms.create(750, 220, 'ground');

        // The player and its settings
        this.player = new Player(this, 100, 450);

        //  Input Events
        this.cursors = this.input.keyboard.createCursorKeys();

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.add.group();

        // add 12 stars to the group
        for (let i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            const star = new Star(this, 12 + (i * 70), 0);
            this.stars.add(star);
        }

        this.bombs = this.add.group();

        //  The score
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //  Collide the player and the stars with the platforms
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);

        this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);

        this.addBomb();
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

        if (this.cursors.up.isDown && this.player.body.touching.down)
        {
            this.player.jump();
        }
    }

    collectStar (player, star)
    {
        star.collect();

        //  Add and update the score
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);

        if (this.stars.countActive(true) === 0)
        {
            //  A new batch of stars to collect
            this.stars.children.iterate(child =>
            {

                child.reset();

            });
        }
    }

    addBomb()
    {
        const x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        const bomb = new Bomb(this, x, 16);
        this.bombs.add(bomb);
    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.idle();

        this.gameOver = true;
    }
}
