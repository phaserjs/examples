class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('flower', 'assets/sprites/flower-exo.png');
        this.load.image('cursor', 'assets/sprites/drawcursor.png');
    }

    create ()
    {
        const flower = this.physics.add.image(100, 300, 'flower');

        flower.body
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .setMaxSpeed(300);

        const cursor = this.add.image(0, 0, 'cursor').setVisible(false);

        this.add.text(10, 10, 'Click to set target', { fill: '#00ff00' });

        this.input.on('pointerdown', (pointer) =>
        {
            cursor.copyPosition(pointer).setVisible(true);

            flower.body.stop();

            // Accelerate toward target at 100px per second per second.

            this.physics.accelerateToObject(flower, cursor, 100);

            // See <move and stop at position.js> for stopping near a target.
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
