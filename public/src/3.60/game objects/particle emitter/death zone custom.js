class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const rect1 = new Phaser.Geom.Rectangle(100, 50, 100, 100);
        const rect2 = new Phaser.Geom.Rectangle(200, 350, 400, 200);
        const rect3 = new Phaser.Geom.Rectangle(550, 150, 200, 100);

        const rectangles = {
            contains: function (x, y)
            {
                return Phaser.Geom.Rectangle.Contains(rect1, x, y) ||
                       Phaser.Geom.Rectangle.Contains(rect2, x, y) ||
                       Phaser.Geom.Rectangle.Contains(rect3, x, y);
            }
        };

        const particles = this.add.particles('flares');

        particles.createEmitter({
            frame: [ 'red', 'green', 'blue' ],
            x: 400,
            y: 100,
            speed: 300,
            gravityY: 400,
            lifespan: 4000,
            scale: 0.4,
            blendMode: 'ADD',
            deathZone: { type: 'onEnter', source: rectangles }
        });

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00, 1);

        graphics.strokeRectShape(rect1);
        graphics.strokeRectShape(rect2);
        graphics.strokeRectShape(rect3);

    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
