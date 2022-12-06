class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const point = new Phaser.Geom.Point(400, 300);
        graphics.fillPointShape(point, 10);

        point.setTo();
        graphics.fillPointShape(point, 15);

        point.setTo(100);
        graphics.fillPointShape(point, 20);

        point.setTo(200, 100);
        graphics.fillPointShape(point, 25);
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
