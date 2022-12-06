class Example extends Phaser.Scene
{
    starGraphics;

    create ()
    {
        this.starGraphics = this.add.graphics({x: 400, y: 300});
        this.drawStar(this.starGraphics, 0, 0, 5, 100, 50, 0xFFFF00, 0xFF0000);
    }

    update ()
    {
        this.starGraphics.rotation += 0.01;
        this.starGraphics.scaleX = 0.8 + Math.abs(Math.sin(this.starGraphics.rotation));
        this.starGraphics.scaleY = 0.8 + Math.abs(Math.sin(this.starGraphics.rotation));
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor)
    {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        graphics.lineStyle(10, lineColor, 1.0);
        graphics.fillStyle(color, 1.0);
        graphics.beginPath();
        graphics.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++)
        {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            graphics.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            graphics.lineTo(x, y);
            rot += step;
        }
        graphics.lineTo(cx, cy - outerRadius);
        graphics.closePath();
        graphics.fillPath();
        graphics.strokePath();
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
