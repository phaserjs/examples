class Example extends Phaser.Scene
{
    constructor()
    {
        super();
        this.graphics = undefined;
        this.t = 0;
        this.rectangles = [];
    }

    create () {
        this.graphics = this.add.graphics({x: 0, y: 0});

        for (let i = 0; i < 100; ++i)
        {
            this.rectangles.push({
                x: Math.random() * 800,
                y: Math.random() * 600,
                w: 50 + Math.random() * 50,
                h: 50 + Math.random() * 50,
                r: Math.random()
            });
        }
    }

    update () {

        this.graphics.clear();

        for (let i = 0; i < this.rectangles.length; ++i)
        {
            let rect = this.rectangles[i];
            this.graphics.save();
            this.graphics.translateCanvas(rect.x, rect.y);
            this.graphics.scaleCanvas(Math.sin(rect.r), Math.sin(rect.r));
            this.graphics.rotateCanvas(rect.r);
            this.graphics.fillStyle(0xFFFF00, 1.0);
            this.graphics.lineStyle(4.0, 0xFF0000, 1.0);
            this.graphics.fillRect(-rect.w / 2, -rect.h / 2, rect.w, rect.h);
            this.graphics.strokeRect(-rect.w / 2, -rect.h / 2, rect.w, rect.h);
            this.graphics.restore();
            rect.r += 0.01;

        }
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: [Example],
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
