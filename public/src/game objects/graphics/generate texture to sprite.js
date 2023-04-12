class Example extends Phaser.Scene
{
    starGraphics;
    create() {
        this.starGraphics = this.make.graphics({x: 0, y: 0, add: false});
        this.drawStar(this.starGraphics, 105, 105,  5, 100, 50, 0xFFFF00, 0xFF0000);
        this.starGraphics.generateTexture('starGraphics', 210, 210);
        const image = this.add.image(400, 300, 'starGraphics');
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color, lineColor) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;
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
        graphics.fillPath();
        graphics.strokePath();
    }

}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);

