class Example extends Phaser.Scene
{
    i = 0;
    text;

    create ()
    {
        const graphics = this.add.graphics();

        this.text = this.add.text(400, 300, 'Phaser 3 - 0', { fontFamily: 'Arial', fontSize: 64, color: '#ffff00' });

        this.text.setOrigin(0.5);

        //  Draw grid lines

        graphics.lineStyle(2, 0x00ff00, 0.5);

        graphics.beginPath();

        graphics.moveTo(400, 0);
        graphics.lineTo(400, 600);

        graphics.moveTo(0, 300);
        graphics.lineTo(800, 300);

        graphics.strokePath();

        graphics.closePath();
    }

    update ()
    {
        this.i++;
        this.text.setText(`Phaser 3 - ${this.i.toString()}`);
        this.text.rotation += 0.01;
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
