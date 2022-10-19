class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.gingerbreads = [];
    }

    preload ()
    {
        this.load.image('gingerbread', 'assets/sprites/gingerbread.png');
    }

    create ()
    {
        for (let i = 0; i < 26; i++)
        {
            this.gingerbreads.push(this.add.image(i * 32, 300, 'gingerbread'));
        }
    }

    update ()
    {
        Phaser.Actions.Angle(this.gingerbreads, 1.5, 0.1);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
