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
                refDistance: 4
            }
        });

        scene.add.existing(this);
    }
}

class Example extends Phaser.Scene
{
    preload ()
    {
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

        this.load.setPath('assets/sprites/');

        this.load.image('speaker', 'speakers/middle.png');
        this.load.image('dude', 'phaser-dude.png');
    }

    create ()
    {
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
        for (let i = 0; i < 8; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);
            const sound = Phaser.Math.Between(1, 15);

            const monster = new Monster(this, x, y, 'speaker', null, `growl${sound}`);
        }
    }

    createPlayer ()
    {
        this.player = this.physics.add.sprite(400, 300, 'dude');

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
