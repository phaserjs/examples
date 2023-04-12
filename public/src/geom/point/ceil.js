class Example extends Phaser.Scene
{
    y = 100;
    graphics;
    text2;
    text1;
    point2;
    point1;

    create ()
    {
        this.graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        this.point1 = new Phaser.Geom.Point(300, 100);
        this.point2 = new Phaser.Geom.Point(500, 100);

        this.text1 = this.add.text(100, 50, '');
        this.text2 = this.add.text(500, 50, '');
    }

    update ()
    {
        this.y += 0.05;

        this.point1.y = this.point2.y = this.y;

        Phaser.Geom.Point.Ceil(this.point2);

        this.text1.setText(`y: ${this.point1.y}`);
        this.text2.setText(`y: ${this.point2.y}`);

        this.graphics.clear();
        this.graphics.fillPointShape(this.point1, 20);
        this.graphics.fillPointShape(this.point2, 20);
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
