import { Player } from '../gameObjects/Player.js';
import { Star } from '../gameObjects/Star.js';
import { Bomb } from '../gameObjects/Bomb.js';
import { Platform } from '../gameObjects/Platform.js';
import { MysteryBox } from '../gameObjects/MysteryBox.js';
import { TreasureBox } from '../gameObjects/TreasureBox.js';
import { Coin } from '../gameObjects/Coin.js';
import { Key } from '../gameObjects/Key.js';
import { Score } from '../gameObjects/Score.js';
import { Chick } from '../gameObjects/Chick.js';
import { Hamster } from '../gameObjects/Hamster.js';
import { Cake } from '../gameObjects/Cake.js';
import { Exit } from '../gameObjects/Exit.js';
import ANIMATION_KEYS from '../animationKeys.js';
import SPRITE_KEYS from '../spriteKeys.js';
import AUDIO_KEYS from '../audioKeys.js';

export class Game extends Phaser.Scene
{
    constructor()
    {
        super('Game');
    }

    preload ()
    {
        this.load.image(SPRITE_KEYS.SKY, 'assets/images/clouds.png');
        this.load.image(SPRITE_KEYS.GROUND, 'assets/images/platform.png');
        this.load.image(SPRITE_KEYS.BOMB, 'assets/images/bomb.png');
        this.load.spritesheet(SPRITE_KEYS.FANTASY_TILES, 'assets/images/fantasy-tiles.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet(SPRITE_KEYS.DUDE, 'assets/images/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet(SPRITE_KEYS.CAKE, 'assets/images/cakewalk.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet(SPRITE_KEYS.CHICK, 'assets/images/chick.png', { frameWidth: 16, frameHeight: 18 });
        this.load.spritesheet(SPRITE_KEYS.HAMSTER, 'assets/images/humstar.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.initVariables();
        this.initGameUi();
        this.initBackgrounds();
        this.initCamera();

        this.interactive = this.add.group();
        this.interactiveSolid = this.add.group();
        this.exits = this.add.group();
        this.platforms = this.add.group();
        this.sensors = this.add.group();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.add(new Platform(this, 0, 536, 39, 2));
        this.platforms.add(new Platform(this, 1248, 568, 15));
        this.platforms.add(new Platform(this, 1024, 408, 3));
        this.platforms.add(new Platform(this, 800, 408, 3));
        this.platforms.add(new Platform(this, 480, 440, 3));
        this.platforms.add(new Platform(this, 576, 344, 3));
        this.platforms.add(new Platform(this, 64, 224, 8));
        this.platforms.add(new Platform(this, 750, 240, 13));
        this.platforms.add(new Platform(this, 544, 96));
        this.platforms.add(new Platform(this, 376, 224, 1, 3));
        this.platforms.add(new Platform(this, 376, 96));
        this.platforms.add(new Platform(this, 1376, 408));
        this.platforms.add(new Platform(this, 1248, 312));
        this.platforms.add(new Platform(this, 1484, 312));
        this.platforms.add(new Platform(this, 1376, 224));

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

        this.enemies = this.add.group();

        //  Collide the player and the stars with the platforms
        this.physics.add.overlap(this.player, this.interactive, this.interact);
        this.physics.add.collider(this.player, this.interactiveSolid, this.interact);
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.overlap(this.player, this.exits, this.exitLevel, null, this);

        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.enemies, this.interactiveSolid);
        this.physics.add.overlap(this.sensors, this.platforms);
        this.physics.add.overlap(this.sensors, this.interactiveSolid);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.hitBomb, null, this);
        
        this.addMysteryBoxes();
        this.addTreasureBoxes();
        this.addExit();
        this.addEnemies();
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

    initVariables ()
    {
        this.gameOver = false;
        this.cursors = undefined;
        this.sensors = undefined;
        this.platforms = undefined;
        this.interactive = undefined;
        this.interactiveSolid = undefined;
        this.enemies = undefined;
        this.stars = undefined;
        this.player = undefined;
        this.exits = undefined;
        this.gameUiScene = undefined;
    }

    initGameUi ()
    {
        this.scene.launch('GameUi');
        this.gameUiScene = this.scene.get('GameUi');
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
            key: ANIMATION_KEYS.COIN_SPIN,
            frames: this.anims.generateFrameNumbers(SPRITE_KEYS.FANTASY_TILES, { start: 42, end: 47 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: ANIMATION_KEYS.PLAYER_LEFT,
            frames: this.anims.generateFrameNumbers(SPRITE_KEYS.DUDE, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: ANIMATION_KEYS.PLAYER_IDLE,
            frames: [ { key: SPRITE_KEYS.DUDE, frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: ANIMATION_KEYS.PLAYER_RIGHT,
            frames: this.anims.generateFrameNumbers(SPRITE_KEYS.DUDE, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: ANIMATION_KEYS.CHICK_WALK,
            frames: this.anims.generateFrameNumbers(SPRITE_KEYS.CHICK),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: ANIMATION_KEYS.CAKE_WALK,
            frames: this.anims.generateFrameNumbers(SPRITE_KEYS.CAKE, { frames: [ 4, 3, 2, 1, 0 ] }),
            frameRate: 8,
            repeat: -1
        });
    }

    interact (gameObject, interactObject)
    {
        interactObject.activate(gameObject);
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
        this.enemies.add(bomb);
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

    addEnemies ()
    {
        this.enemies.add(new Chick(this, 320, 502));
        this.enemies.add(new Chick(this, 1550, 536));
        this.enemies.add(new Chick(this, 1450, 536));

        this.enemies.add(new Cake(this, 900, 518));
        this.enemies.add(new Cake(this, 660, 328));
        this.enemies.add(new Cake(this, 144, 208));
    }

    addSensor(x, y, width, height)
    {
        const sensor = this.physics.add.image(x, y);
        sensor.body.setSize(width, height);
        sensor.body.setAllowGravity(false);

        this.sensors.add(sensor);

        return sensor;
    }

    sensorOverlap (sensor, platform)
    {
        console.log(platform.body.touching);
    }

    addCoin (x, y)
    {
        new Coin(this, x, y);
    }

    addKey (x, y)
    {
        new Key(this, x, y);
        this.gameUiScene.updateKeys(1);
    }

    addScore (x, y, points)
    {
        new Score(this, x, y, points);
        this.gameUiScene.updateScore(points);
    }

    addExit ()
    {
        this.exits.add(new Exit(this, 1376, 192));
    }

    exitLevel (player, exit)
    {
        if (this.gameUiScene.getKeys() > 0)
        {
            this.gameOver = true;
            this.gameUiScene.updateKeys(-1);
            player.idle();

            this.gameUiScene.playAudio(AUDIO_KEYS.WIN);

            // restart scene after 2 seconds
            this.time.delayedCall(2000, () =>
            {
                this.scene.restart();
            });
        }
    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.idle();

        this.gameOver = true;
    }
}
