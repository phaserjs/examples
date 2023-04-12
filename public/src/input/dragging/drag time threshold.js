class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const image = this.add.sprite(200, 300, 'eye').setInteractive();

        this.input.setDraggable(image);

        //  The pointer has to be held down for 500ms before it's considered a drag
        this.input.dragTimeThreshold = 500;

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
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
