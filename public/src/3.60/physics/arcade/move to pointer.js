class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('clown', 'assets/sprites/clown.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        const blocks = this.physics.add.group({key: 'block', frameQuantity: 6, setXY: { x: 100, y: 400, stepX: 100 }});
        const clown = this.physics.add.image(200, 300, 'clown');
        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        this.input.on('pointermove', (pointer) =>
        {
            cursor.setVisible(true).copyPosition(pointer);

            // Move at 240 px/s
            this.physics.moveToObject(clown, pointer, 240);

            for (const block of blocks.getChildren())
            {
                // Move at 120 px/s
                this.physics.moveToObject(block, pointer, 120);
            }
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
        arcade: { debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
