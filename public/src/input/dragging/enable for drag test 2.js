class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('apple', 'assets/sprites/apple.png');
    }

    create ()
    {
        const apple = this.add.sprite(100, 100, 'apple');

        apple.setInteractive();

        this.input.setDraggable(apple);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    _parent: 'phaser-example',
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
