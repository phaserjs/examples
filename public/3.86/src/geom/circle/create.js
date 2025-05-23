class Example extends Phaser.Scene
{
    create ()
    {
        const circle = new Phaser.Geom.Circle(400, 300, 100);

        const graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
        graphics.fillCircleShape(circle);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
