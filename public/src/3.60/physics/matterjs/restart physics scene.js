class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'preloader' });
    }

    preload ()
    {
        this.load.image('buttonBG', 'assets/sprites/button-bg.png');
        this.load.image('buttonText', 'assets/sprites/button-text.png');
        this.load.image('ayu', 'assets/pics/ayu.png');
        this.load.image('ball', 'assets/sprites/pangball.png');
    }

    create ()
    {
        console.log('%c Preloader ', 'background: green; color: white; display: block;');

        this.scene.start('mainmenu');
    }
}

class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'mainmenu' });
        window.MENU = this;
    }

    create ()
    {
        console.log('%c MainMenu ', 'background: green; color: white; display: block;');

        const bg = this.add.image(0, 0, 'buttonBG');
        const text = this.add.image(0, 0, 'buttonText');

        const container = this.add.container(400, 300, [ bg, text ]);

        bg.setInteractive();

        bg.once('pointerup', function ()
        {

            this.scene.start('game');

        }, this);
    }
}

class Game extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'game' });
        window.GAME = this;

        this.controls;
    }

    create ()
    {
        console.log('%c Game ', 'background: green; color: white; display: block;');

        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        //  Add in a stack of balls

        for (let i = 0; i < 64; i++)
        {
            const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
            ball.setCircle();
            ball.setFriction(0.005);
            ball.setBounce(1);
        }

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        this.add.text(0, 0, 'Use Cursors to scroll camera.\nClick to Quit', { font: '18px Courier', fill: '#00ff00' }).setScrollFactor(0);

        this.input.once('pointerup', function ()
        {

            this.scene.start('gameover');

        }, this);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

class GameOver extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'gameover' });
        window.OVER = this;
    }

    create ()
    {
        console.log('%c GameOver ', 'background: green; color: white; display: block;');

        this.add.sprite(400, 300, 'ayu');

        this.add.text(300, 500, 'Game Over - Click to start restart', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerup', function (event)
        {

            this.scene.start('mainmenu');

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                y: 0.3
            }
        }
    },
    scene: [ Preloader, MainMenu, Game, GameOver ]
};

const game = new Phaser.Game(config);
