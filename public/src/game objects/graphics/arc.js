class Example extends Phaser.Scene 
{
    constructor () 
    {
        super();
    }

    create () 
    {
        const graphics = this.add.graphics();

        graphics.lineStyle(4, 0xff00ff, 1);

        //  Without this the arc will appear closed when stroked
        graphics.beginPath();

        // arc (x, y, radius, startAngle, endAngle, anticlockwise)
        graphics.arc(400, 300, 200, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

        //  Uncomment this to close the path before stroking
        // graphics.closePath();

        graphics.strokePath();
    }
}

const config = 
{
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
