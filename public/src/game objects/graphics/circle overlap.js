class Example extends Phaser.Scene
{
    constructor ()
    {
        super ();
        this.t = 0;
        this.graphics1 = undefined;
        this.graphics2 = undefined;

    }

    create ()
    {
        this.graphics2 = this.add.graphics({x: -16, y: 0}).lineStyle(28, 0x00ffff, 0.8);
        this.graphics1 = this.add.graphics().lineStyle(28, 0x0000ff, 0.8);

        //  Create the circles

        let radius1 = 64;
        let radius2 = 32;

        for (let i = 0; i < 8; i++)
        {
            this.graphics1.strokeCircle(400, 300, radius1);
            this.graphics2.strokeCircle(400, 300, radius2);

            radius1 += 64;
            radius2 += 64;
        }
    }

    update ()
    {
        this.t += 0.1;

        this.graphics1.x += Math.sin(this.t) * 2;
        this.graphics1.y += Math.cos(this.t) * 2;
        this.graphics2.x += Math.sin(this.t) * 3;
        this.graphics2.y += Math.cos(this.t) * 3;
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
