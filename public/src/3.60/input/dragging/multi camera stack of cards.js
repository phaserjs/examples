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
            const image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive({ draggable: true });

            x += 4;
            y += 4;
        }

        this.cameras.main.setSize(512, 300).setZoom(1).setBackgroundColor('#000000');
        this.cameras.add(512, 0, 512, 300).setZoom(0.25).setBackgroundColor('#0000aa');
        this.cameras.add(0, 300, 512, 300).setZoom(0.5).setBackgroundColor('#00aa00');
        this.cameras.add(512, 300, 512, 300).setZoom(0.5).setBackgroundColor('#aa0000').setRotation(0.4);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    backgroundColor: '#fafafa',
    scene: Example
};

const game = new Phaser.Game(config);
