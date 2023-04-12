class Example extends Phaser.Scene
{

    stars = [];
    starGraphics;

    create() {
        var colorsTable = [
            0xFF0000,
            0x00FF00,
            0x0000FF,
            0xFF00FF,
            0xFFFF00,
            0x00FFFF
        ];
        for (let i = 0; i < 500; ++i)
        {
            this.starGraphics = this.add.graphics({x: Math.random() * 800, y:Math.random() * 600});
            this.drawStar(this.starGraphics, 0, 0,  5, 100, 50, colorsTable[Math.floor(Math.random() * 6)], 0xFF0000);
            this.starGraphics.fillRect(100, 100, 100, 100);
            this.starGraphics.rotation = Math.random();
            this.starGraphics.scaleX = 0.1 + Math.abs(Math.sin(this.starGraphics.rotation)) * 0.2;
            this.starGraphics.scaleY = 0.1 + Math.abs(Math.sin(this.starGraphics.rotation)) * 0.2;
            this.stars.push(this.starGraphics);
        }
    }

    update() {
        for (let i = 0; i < this.stars.length; ++i)
        {
            const star = this.stars[i];
            star.rotation += 0.01;
            star.scaleX = 0.1 + Math.abs(Math.sin(this.starGraphics.rotation)) * 0.2;
            star.scaleY = 0.1 + Math.abs(Math.sin(this.starGraphics.rotation)) * 0.2;
        }
    }

    drawStar (
        graphics,
        cx, cy,
        spikes,
        outerRadius, innerRadius,
        color, lineColor) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        graphics.lineStyle(10, lineColor, 1.0);
        graphics.fillStyle(color, 1.0);
        graphics.beginPath();
        graphics.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
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
        //graphics.strokePath();
        graphics.fillPath();
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
