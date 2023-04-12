class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create ()
    {
        const height = 400;

        const image = this.add.sprite(100, 300, 'cards').setScale(300 / height).setInteractive();

        this.input.setDraggable(image);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.setScale(gameObject.y / height);

            gameObject.x = pointer.x;
            gameObject.y = pointer.y;

        });

        this.input.on('drop', (pointer, gameObject, dropZone) =>
        {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

        });

        //  A drop zone
        const zone = this.add.zone(500, 300, 300, 500).setDropZone();

        //  Just a visual display of the drop zone
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x + zone.input.hitArea.x, zone.y + zone.input.hitArea.y, zone.input.hitArea.width, zone.input.hitArea.height);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
