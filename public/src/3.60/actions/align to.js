class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('red', 'assets/sprites/gem.png');
        this.load.image('blue', 'assets/sprites/columns-blue.png');
    }

    create ()
    {
        const gems = [];

        //  This is our 'lead' Sprite, the first one in the array

        gems.push(this.add.sprite(200, 300, 'red'));

        for (let i = 0; i < 8; i++)
        {
            //  All of the blue gems will be aligned to the right of the red gem
            gems.push(this.add.sprite(0, 0, 'blue'));
        }

        Phaser.Actions.AlignTo(gems, Phaser.Display.Align.RIGHT_CENTER);
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
