class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        //  Create a stack of random cards

        const frames = this.textures.get('cards').getFrameNames();

        let x = 100;
        let y = 100;

        for (let i = 0; i < 64; i++)
        {
            const image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();

            this.input.setDraggable(image);

            x += 4;
            y += 4;
        }

        //  Grab everything under the pointer

        this.input.topOnly = false;

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

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
