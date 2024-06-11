class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient29.png');
        this.load.image('char', 'assets/pics/nayuki.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.add.text(16, 16, 'Drag the Sprite').setFontSize(24).setShadow(1, 1);

        const sprite = this.add.sprite(400, 300, 'char');

        sprite.setInteractive({ draggable: true });

        sprite.on('drag', (pointer, dragX, dragY) => sprite.setPosition(dragX, dragY));
        sprite.on('dragend', this.onSceneDragEndHandler);
    }

    onSceneDragEndHandler(pointer, gameObject)
    {
        console.log(pointer.leftButtonReleased(), pointer.rightButtonReleased());
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
