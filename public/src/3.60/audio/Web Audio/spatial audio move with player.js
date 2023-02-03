class Monster extends Phaser.GameObjects.Sprite
{
    constructor (scene, x, y, texture, frame, soundKey)
    {
        super(scene, x, y, texture, frame);

        this.fx = scene.sound.add(soundKey);

        this.fx.play({
            loop: true,
            source: {
                x,
                y,
                orientationX: 0,
                orientationY: 0,
                orientationZ: -1,
                // distanceModel: 'inverse',
                refDistance: 6,
                rolloffFactor: 1,
                coneInnerAngle: 180,
                coneOuterAngle: 280,
                coneOuterGain: 0.3
            }
        });

        scene.add.existing(this);
    }
}

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
        this.load.image('bg', 'assets/textures/cave-map3.jpg');
        this.load.atlas('monsters', 'assets/atlas/monsters.png', 'assets/atlas/monsters.json');

        this.load.setPath('assets/audio/monsters/');

        this.load.audio('growl1', [ 'growl1.ogg', 'growl1.mp3' ]);
        this.load.audio('growl2', [ 'growl2.ogg', 'growl2.mp3' ]);
        this.load.audio('growl3', [ 'growl3.ogg', 'growl3.mp3' ]);
        this.load.audio('growl4', [ 'growl4.ogg', 'growl4.mp3' ]);
        this.load.audio('growl5', [ 'growl5.ogg', 'growl5.mp3' ]);
        this.load.audio('growl6', [ 'growl6.ogg', 'growl6.mp3' ]);
        this.load.audio('growl7', [ 'growl7.ogg', 'growl7.mp3' ]);
        this.load.audio('growl8', [ 'growl8.ogg', 'growl8.mp3' ]);
        this.load.audio('growl9', [ 'growl9.ogg', 'growl9.mp3' ]);
        this.load.audio('growl10', [ 'growl10.ogg', 'growl10.mp3' ]);
        this.load.audio('growl11', [ 'growl11.ogg', 'growl11.mp3' ]);
        this.load.audio('growl12', [ 'growl12.ogg', 'growl12.mp3' ]);
        this.load.audio('growl13', [ 'growl13.ogg', 'growl13.mp3' ]);
        this.load.audio('growl14', [ 'growl14.ogg', 'growl14.mp3' ]);
        this.load.audio('growl15', [ 'growl15.ogg', 'growl15.mp3' ]);
    }

    create ()
    {
        this.add.image(0, 0, 'bg').setOrigin(0, 0);

        if (this.sound.locked)
        {
            const text = this.add.text(10, 10, 'Click to Start', { font: '32px Courier', fill: '#00ff00' });

            this.sound.once('unlocked', () =>
            {
                text.destroy();

                this.createMonsters()
                this.createPlayer();
            });
        }
        else
        {
            this.createMonsters();
            this.createPlayer();
        }
    }

    createMonsters ()
    {
        const frames = [
            'assassin',
            'cultist',
            'darkreaper',
            'drow',
            'frogman',
            'ghost',
            'giantspider',
            'gnoll',
            'goblin',
            'guard',
            'hobgoblin',
            'icegolem',
            'imp',
            'lizardman',
            'magmagolem',
            'ogre',
            'ruffian',
            'scout',
            'skeletalwarrior',
            'slime',
            'stonegolem',
            'swashbuckler',
            'troll',
            'wererat',
            'zombie',
        ];

        for (let i = 0; i < 32; i++)
        {
            const x = Phaser.Math.Between(500, 2500);
            const y = Phaser.Math.Between(500, 2500);
            const sound = Phaser.Math.Between(1, 15);
            const frame = Phaser.Utils.Array.GetRandom(frames);

            const monster = new Monster(this, x, y, 'monsters', frame, `growl${sound}`);
        }
    }

    createPlayer ()
    {
        this.player = this.physics.add.sprite(400, 300, 'dude');

        this.cameras.main.startFollow(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.sound.setListenerPosition(400, 300);
    }

    update ()
    {
        if (!this.player)
        {
            return;
        }

        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }

        this.sound.listenerPosition.set(this.player.x, this.player.y);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
