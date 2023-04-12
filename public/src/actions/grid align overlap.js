class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/deepblue.png');
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const frames = this.textures.get('cards').getFrameNames();

        const cards = [];

        //  Create 8 cards and push them into an array

        for (var i = 0; i < 16; i++)
        {
            cards.push(this.add.sprite(0, 0, 'cards', Phaser.Math.RND.pick(frames)));
        }

        //  The cards are 140x190 in size

        //  Let's lay them out in a 8x2 grid, except we'll use a smaller cell size, so that
        //  the cards overlap horizontally

        Phaser.Actions.GridAlign(cards, {
            width: 8,
            height: 2,
            cellWidth: 80,
            cellHeight: 220,
            x: 50,
            y: 80
        });
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
