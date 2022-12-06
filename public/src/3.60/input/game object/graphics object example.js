class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('aliens', 'assets/sprites/bsquadron-enemies.png', { frameWidth: 192, frameHeight: 160 });
    }

    create ()
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0xffff00, 1);
        graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
        graphics.fillPath();

        graphics.setInteractive(new Phaser.Geom.Circle(400, 300, 200), Phaser.Geom.Circle.Contains);

        graphics.on('pointerover', () =>
        {

            graphics.clear();
            graphics.fillStyle(0xff0000, 1);
            graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
            graphics.fillPath();

        });

        graphics.on('pointerout', () =>
        {

            graphics.clear();
            graphics.fillStyle(0xffff00, 1);
            graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);
            graphics.fillPath();

        });
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
