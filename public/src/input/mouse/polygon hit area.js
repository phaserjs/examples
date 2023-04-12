class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('car', 'assets/pics/supercars-parsec.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'car');

        const shape = new Phaser.Geom.Polygon([
            0, 143,
            0, 92,
            110, 40,
            244, 4,
            330, 0,
            458, 12,
            574, 18,
            600, 79,
            594, 153,
            332, 152,
            107, 157
        ]);

        sprite.setInteractive(shape, Phaser.Geom.Polygon.Contains);

        //  Input Event listeners

        this.input.on('gameobjectover', (pointer, gameObject) =>
        {

            gameObject.setTint(0x7878ff);

        });

        this.input.on('gameobjectout', (pointer, gameObject) =>
        {

            gameObject.clearTint();

        });

        //  Draw the polygon
        const graphics = this.add.graphics({ x: sprite.x - sprite.displayOriginX, y: sprite.y - sprite.displayOriginY });

        graphics.lineStyle(2, 0x00aa00);

        graphics.beginPath();

        graphics.moveTo(shape.points[0].x, shape.points[0].y);

        for (let i = 1; i < shape.points.length; i++)
        {
            graphics.lineTo(shape.points[i].x, shape.points[i].y);
        }

        graphics.closePath();
        graphics.strokePath();
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
