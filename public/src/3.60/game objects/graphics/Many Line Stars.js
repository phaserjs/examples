class Example extends Phaser.Scene
{
    cameraRotation = 0;
    stars = [];

    create ()
    {
        const radius = 10;
        const radius2 = radius * 2;
        const maxWidth = (800 / radius2)|0;

        for (let i = 0; i < 1200; ++i)
        {
            const graphics = this.add.graphics({x: radius + (i % maxWidth) * radius2, y: radius + ((i / maxWidth)|0) * radius2});
            this.drawStar(graphics, 0, 0, 5, radius, radius / 2, 0xff0000, 0xFFFF00);
            this.stars.push(graphics);
            this.stars[i].rotation += i * 0.01;
        }
    }

    update ()
    {
        for (let i = 0; i < this.stars.length; ++i)
        {
            const star = this.stars[i];
            star.rotation += 0.01;
            star.scaleX = 0.5 + Math.abs(Math.sin(star.rotation));
            star.scaleY = 0.5 + Math.abs(Math.sin(star.rotation));
        }
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor)
    {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        graphics.lineStyle(1, lineColor, 1.0);
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
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example,
    batchSize: 8000,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
