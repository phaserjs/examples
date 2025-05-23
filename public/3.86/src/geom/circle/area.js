class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 }, fillStyle: { color: 0xff00ff } });

        const circle = new Phaser.Geom.Circle(40, 575, 25);

        function drawCircle ()
        {
            const area = Phaser.Geom.Circle.Area(circle);

            graphics.fillRect(circle.right + 5, circle.bottom, 50, -area / 50);
            graphics.strokeCircleShape(circle);
        }

        drawCircle(graphics, circle);

        circle.setTo(175, 550, 50);
        drawCircle(graphics, circle);

        circle.setTo(360, 525, 75);
        drawCircle(graphics, circle);

        circle.setTo(595, 500, 100);
        drawCircle(graphics, circle);
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
