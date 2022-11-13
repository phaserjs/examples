class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/casinotable.png');
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(16, 16, 'Bring to Top on Drag').setFontSize(24).setShadow(1, 1);

        //  Create a stack of random cards
        const frames = this.textures.get('cards').getFrameNames();

        Phaser.Utils.Array.Shuffle(frames);

        let x = 140;
        let y = 180;

        for (let i = 0; i < 22; i++)
        {
            const image = this.add.image(x, y, 'cards', frames[i]);

            image.setInteractive({ draggable: true });

            x += 14;
            y += 12;
        }

        this.input.on('dragstart', function (pointer, gameObject) {

            //  This will bring the selected gameObject to the top of the list
            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
