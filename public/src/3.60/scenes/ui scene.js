class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'GameScene' });
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/sky4.png');
        this.load.image('crate', 'assets/sprites/crate.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            const box = this.add.image(x, y, 'crate');

            //  Make them all input enabled
            box.setInteractive();
        }

        this.input.on('gameobjectup', this.clickHandler, this);
    }

    clickHandler (pointer, box)
    {
        //  Disable our box
        box.input.enabled = false;
        box.setVisible(false);

        //  Dispatch a Scene event
        this.events.emit('addScore');
    }
}

class UIScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'UIScene', active: true });

        this.score = 0;
    }

    create ()
    {
        //  Our Text object to display the Score
        const info = this.add.text(10, 10, 'Score: 0', { font: '48px Arial', fill: '#000000' });

        //  Grab a reference to the Game Scene
        const ourGame = this.scene.get('GameScene');

        //  Listen for events from it
        ourGame.events.on('addScore', function ()
        {

            this.score += 10;

            info.setText(`Score: ${this.score}`);

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ GameScene, UIScene ]
};

const game = new Phaser.Game(config);
