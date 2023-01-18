class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        const flower = this.physics.add.image(100, 300, 'flower')
            .setBounce(1, 1)
            .setCollideWorldBounds(true);

        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        this.add.text(10, 10, 'Click to set target', { fill: '#00ff00' });

        this.input.on('pointerdown', (pointer) =>
        {
            cursor.copyPosition(pointer).setVisible(true);

            // Move toward target in 1 second:
            this.physics.moveToObject(flower, cursor, 0, 1000);

            console.log('New speed is %.3f px/s', flower.body.velocity.length());

            // See <move and stop at position.js> for stopping.
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
