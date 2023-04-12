class Example extends Phaser.Scene
{
    graphics;
    rt;

    create ()
    {
        this.graphics = this.add.graphics();
        this.graphics.setVisible(false);

        this.drawStar(this.graphics, 200, 200, 5, 200, 100, 0xffff00);

        this.rt = this.add.renderTexture(400, 300, 400, 400).setOrigin(0.5);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.graphics);
    }

    drawStar (graphics, cx, cy, spikes, outerRadius, innerRadius, color)
    {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

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
