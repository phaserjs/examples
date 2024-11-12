class Example extends Phaser.Scene
{
    graphics;

    create ()
    {
        this.graphics = this.add.graphics();

        const color = 0xffff00;
        const thickness = 2;
        const alpha = 1;

        this.graphics.lineStyle(thickness, color, alpha);

        this.graphics.strokeRect(32, 32, 256, 256);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
