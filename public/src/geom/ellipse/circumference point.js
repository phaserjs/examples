class Example extends Phaser.Scene
{
    angle;

    create ()
    {
        const graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

        const ellipse = new Phaser.Geom.Ellipse(400, 300, 250, 150);

        let circumferencePoint = new Phaser.Geom.Point(275, 300);
        const centerPoint = new Phaser.Geom.Point(400, 300);

        const line = new Phaser.Geom.Line(400, 300, 275, 300);

        const text1 = this.add.text(20, 50, 'Circumference Point:');
        const text2 = this.add.text(20, 75, 'Angle:');

        this.input.on('pointermove', pointer =>
        {

            this.angle = Phaser.Math.Angle.Between(400, 300, pointer.x, pointer.y);

            circumferencePoint = Phaser.Geom.Ellipse.CircumferencePoint(ellipse, this.angle);

            line.x2 = circumferencePoint.x;
            line.y2 = circumferencePoint.y;

            text1.setText(`Circumference Point: (${circumferencePoint.x}, ${circumferencePoint.y})`);
            text2.setText(`Angle: ${this.angle}`);

            graphics.fillPointShape(circumferencePoint, 20);

            draw();
        });

        draw();

        function draw ()
        {
            graphics.clear();
            graphics.lineStyle(2, 0x00aaaa);
            graphics.strokeEllipseShape(ellipse);
            graphics.strokeLineShape(line);
            graphics.fillPointShape(centerPoint, 10);
            graphics.fillPointShape(circumferencePoint, 20);
        }
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
