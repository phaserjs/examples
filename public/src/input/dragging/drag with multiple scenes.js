class GameScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'GameScene' });
    }

    preload ()
    {
        this.load.image('box', 'assets/sprites/128x128-v2.png');
    }

    create ()
    {
        // this.input.setGlobalTopOnly(true);

        const box = this.add.image(400, 300, 'box').setInteractive();

        box.on('pointerdown', () =>
        {

            box.tint = Math.random() * 0xffffff;

        });
    }
}

class UIScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'UIScene', active: true });
    }

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const image = this.add.sprite(200, 300, 'eye').setInteractive();

        this.input.setDraggable(image);

        this.input.on('dragstart', (pointer, gameObject) =>
        {

            gameObject.setTint(0xff0000);

        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });

        this.input.on('dragend', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });
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
