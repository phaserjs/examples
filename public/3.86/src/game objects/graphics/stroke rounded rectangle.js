class Example extends Phaser.Scene
{
    graphics;

    create ()
    {
        this.graphics = this.add.graphics();

        this.graphics.lineStyle(2, 0xffff00, 1);

        //  32px radius on the corners
        this.graphics.strokeRoundedRect(32, 32, 300, 200, 32);

        this.graphics.lineStyle(4, 0xff00ff, 1);

        //  Using an object to define a different radius per corner
        this.graphics.strokeRoundedRect(360, 240, 400, 300, { tl: 64, tr: 22, bl: 12, br: 0 });
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
