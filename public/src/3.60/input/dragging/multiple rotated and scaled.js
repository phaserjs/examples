class Example extends Phaser.Scene
{
    cards;

    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        //  Create a stack of random cards
        this.cards = this.add.group();

        const frames = this.textures.get('cards').getFrameNames();

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 1024);
            const y = Phaser.Math.Between(0, 600);

            const image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames));

            image.setInteractive();

            image.setScale(Phaser.Math.FloatBetween(0.25, 0.75));

            image.setAngle(Phaser.Math.Between(0, 359));

            this.input.setDraggable(image);

            this.cards.add(image);
        }

        const _this = this;

        this.input.on('dragstart', function (pointer, gameObject)
        {

            this.children.bringToTop(gameObject);

        }, this);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
    }

    update ()
    {
        Phaser.Actions.Rotate(this.cards.getChildren(), 0.01);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
