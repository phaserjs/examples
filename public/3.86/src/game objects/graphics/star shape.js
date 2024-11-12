class Example extends Phaser.Scene
{
    create ()
    {

        const graphics = this.add.graphics();

        this.drawStar(graphics, 100, 300, 4, 50, 50 / 2, 0xffff00, 0xff0000);
        this.drawStar(graphics, 400, 300, 5, 100, 100 / 2, 0xffff00, 0xff0000);
        this.drawStar(graphics, 700, 300, 6, 50, 50 / 2, 0xffff00, 0xff0000);
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor)
    {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        graphics.lineStyle(4, lineColor, 1);
        graphics.fillStyle(color, 1);
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
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
