class Example extends Phaser.Scene
{
    tilesprite;

    create ()
    {
        const starGraphics = this.make.graphics({ x: 0, y: 0, add: false });

        this.drawStar(starGraphics, 128, 128, 5, 120, 50, 0xFFFF00, 0xFF0000);

        starGraphics.generateTexture('starGraphics', 256, 256);

        this.tilesprite = this.add.tileSprite(400, 300, 800, 600, 'starGraphics');
    }

    update ()
    {
        this.tilesprite.tilePositionX += 1;
        this.tilesprite.tilePositionY += 2;
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
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
