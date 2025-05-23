class Example extends Phaser.Scene
{
    create ()
    {
        this.angle = 0;

        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa } });

        this.point = new Phaser.Math.Vector2(250, 0);
        this.point2 = new Phaser.Math.Vector2(250, 0);

        this.text = this.add.text(30, 30, '');

        this.input.on('pointermove', (pointer) => {

            this.point2.copy(pointer);

            this.point2.x -= 400;
            this.point2.y -= 300;

        });
    }

    update ()
    {
        const graphics = this.graphics;

        graphics.clear();

        this.angle += 0.005;

        //  Vector starting at 0/0
        this.point.set(Math.cos(this.angle) * 250, Math.sin(this.angle) * 250);

        // drawn from the center (as if center was 0/0)
        graphics.lineBetween(400, 300, 400 + this.point.x, 300 + this.point.y);

        graphics.lineStyle(2, 0x00aa00);
        graphics.lineBetween(400, 300, 400 + this.point2.x, 300 + this.point2.y);

        const dotProduct = this.point.dot(this.point2);

        const area = this.point.length() * this.point2.length();

        const angleBetween = Math.acos(dotProduct / area);

        // only used to determine arc direction
        const cross = this.point.cross(this.point2);

        graphics.lineStyle(2, 0xaa0000);
        graphics.beginPath();
        graphics.arc(400, 300, 100, this.angle, this.angle + (cross < 0 ? -angleBetween : angleBetween));
        graphics.strokePath();

        this.text.setText([
            'Dot product: ' + dotProduct,
            'Normalized dot product: ' + dotProduct / area,
            'Angle between vectors: ' + Phaser.Math.RadToDeg(angleBetween),
            'Pointer is ' + (dotProduct > 0 ? 'in front of' : 'behind') + ' the blue vector direction'
        ]);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
