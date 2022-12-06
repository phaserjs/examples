class Example extends Phaser.Scene
{
    block;

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.block = this.physics.add.image(400, 100, 'block')
            .setVelocity(100, 200)
            .setBounce(1, 1)
            .setCollideWorldBounds(true);

        this.input.setDraggable(this.block.setInteractive());

        this.input.on('dragstart', (pointer, obj) =>
        {
            obj.body.moves = false;
        });

        this.input.on('drag', (pointer, obj, dragX, dragY) =>
        {
            obj.setPosition(dragX, dragY);
        });

        this.input.on('dragend', (pointer, obj) =>
        {
            obj.body.moves = true;
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
