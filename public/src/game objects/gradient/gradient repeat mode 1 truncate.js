class Example extends Phaser.Scene
{
    create ()
    {
        this.add.gradient({
            repeatMode: 1, // TRUNCATE
            start: { x: 0.25, y: 0.5 },
            shape: { x: 0.5, y: 0 }
        }, 400, 300, 800, 400);

        // Highlight central gradient unit.
        this.add.rectangle(400, 300, 400, 400).setStrokeStyle(1, 0xff0000, 0.5);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
