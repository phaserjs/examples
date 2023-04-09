class Example extends Phaser.Scene 
    {
    constructor ()
    {
        super();
    }

    create () 
    {
        const graphics = this.add.graphics();

        graphics.fillStyle(0xffff00, 1);

        graphics.slice(400, 300, 200, Phaser.Math.DegToRad(340), Phaser.Math.DegToRad(20), true);

        graphics.fillPath();
    }
}

const config = 
{
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
