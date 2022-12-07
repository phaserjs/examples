class Example extends Phaser.Scene
{
    hitLine = new Phaser.Geom.Line();
    text;
    graphics;
    right = -1;
    left = -1;
    intersects = false;
    boundsColor = 0x00ff00;
    spriteBounds;
    pathBounds;
    points;
    curve;

    preload ()
    {
        this.load.image('test', 'assets/sprites/32x32.png');

        // this.load.image('test', 'assets/sprites/arrow.png');
    }

    create ()
    {
        this.graphics = this.add.graphics();

        const image = this.add.sprite(200, 100, 'test').setAlpha(0.5).setInteractive();

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.input.setDraggable(image);

        this.curve = new Phaser.Curves.Spline([
            50, 300,
            164, 246,
            274, 442,
            412, 157,
            522, 541,
            664, 264
        ]);

        this.points = this.curve.getDistancePoints(32);

        this.pathBounds = new Phaser.Geom.Rectangle();
        this.spriteBounds = new Phaser.Geom.Rectangle();

        this.curve.getBounds(this.pathBounds);
        image.getBounds(this.spriteBounds);

        this.input.on(Phaser.Input.Events.DRAG, event =>
        {

            event.gameObject.x = event.dragX;
            event.gameObject.y = event.dragY;

            image.getBounds(this.spriteBounds);

            this.intersects = false;

            if (Phaser.Geom.Intersects.RectangleToRectangle(this.pathBounds, this.spriteBounds))
            {
                this.boundsColor = 0xff0000;

                //  Within the curve bounds, so let's check the points

                this.left = -1;
                this.right = -1;

                for (let i = 0; i < this.points.length; i++)
                {
                    const p = this.points[i];

                    if (p.x > this.spriteBounds.x)
                    {
                        this.left = i - 1;

                        if (this.left < 0)
                        {
                            this.left = 0;
                        }

                        break;
                    }
                }

                for (let i = this.points.length - 1; i >= this.left; i--)
                {
                    const p = this.points[i];

                    if (p.x < this.spriteBounds.right)
                    {
                        this.right = i + 1;

                        if (this.right === this.points.length)
                        {
                            this.right--;
                        }

                        break;
                    }
                }

                if (this.left === -1 && this.right !== -1)
                {
                    this.left = 0;
                }
                else if (this.left !== -1 && this.right === -1)
                {
                    this.right = this.points.length - 1;
                }

                //  Rect vs. Line intersection between left and right
                const temp = new Phaser.Geom.Line();

                for (let i = this.left; i < this.right; i++)
                {
                    const p1 = this.points[i];
                    const p2 = this.points[i + 1];

                    if (!this.intersects && p1 && p2)
                    {
                        temp.setTo(p1.x, p1.y, p2.x, p2.y);

                        if (Phaser.Geom.Intersects.LineToRectangle(temp, this.spriteBounds))
                        {
                            this.intersects = true;

                            Phaser.Geom.Line.CopyFrom(temp, this.hitLine);

                            break;
                        }
                    }
                }
            }
            else
            {
                this.boundsColor = 0x00ff00;
                this.left = -1;
                this.right = -1;
            }

        });
    }

    update ()
    {
        this.text.setText([
            `left: ${this.left}`,
            `right: ${this.right}`
        ]);

        this.graphics.clear();

        //  Draw the bounds
        this.graphics.lineStyle(1, this.boundsColor, 1).strokeRectShape(this.pathBounds);

        if (this.left !== -1)
        {
            this.graphics.lineBetween(this.points[this.left].x, 0, this.points[this.left].x, 600);
            this.graphics.lineBetween(this.points[this.right].x, 0, this.points[this.right].x, 600);
        }

        this.graphics.lineStyle(1, this.boundsColor, 1).strokeRectShape(this.spriteBounds);

        this.graphics.lineStyle(1, 0xffffff, 0.5);

        this.curve.draw(this.graphics, 64);

        for (let i = 0; i < this.points.length; i++)
        {
            const p = this.points[i];

            if (i >= this.left && i <= this.right)
            {
                this.graphics.fillStyle(0xff00ff, 1);
                this.graphics.fillCircle(p.x, p.y, 3);
            }
            else
            {
                this.graphics.fillStyle(0x00ff00, 1);
                this.graphics.fillCircle(p.x, p.y, 2);
            }
        }

        if (this.intersects)
        {
            this.graphics.lineStyle(2, 0xffff00, 1);
            this.graphics.strokeLineShape(this.hitLine);
        }

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
