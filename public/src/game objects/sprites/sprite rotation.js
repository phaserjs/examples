class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.text = undefined;
        this.arrow = undefined;
    }

    preload ()
    {
      this.load.image('arrow', 'assets/sprites/longarrow-white.png');
    }

    create ()
    {
        //  The code isn't too important for this example
        //  What we're showing here is the angles, in degrees and radians,
        //  that a Phaser sprite uses when rotating.
        //
        //  You can rotate a sprite by setting either property.
        //
        //  `angle` is in degrees, from -180 to 180.
        //  `rotation` is in radians, from -PI to PI
        //
        //  For example:
        //
        //  sprite.angle = 45
        //
        //  is the same as:
        //
        //  sprite.rotation = 0.785

        let labelStyle = { font: "16px courier", fill: "#00ff00", align: "center" };

        //  Create a large circle, then draw the angles on it

        let circle = new Phaser.Geom.Circle(400, 300, 225);
        let labelCircle = new Phaser.Geom.Circle(400, 300, 265);

        let graphics = this.add.graphics();

        graphics.lineStyle(2, 0x00bb00, 1);

        graphics.strokeCircleShape(circle);

        graphics.beginPath();

        for (let a = 0; a < 360; a += 22.5)
        {
            graphics.moveTo(400, 300);

            let p = Phaser.Geom.Circle.CircumferencePoint(circle, Phaser.Math.DegToRad(a));

            graphics.lineTo(p.x, p.y);

            let lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle, Phaser.Math.DegToRad(a));

            let na = a;

            if (a > 180)
            {
                na -= 360;
            }

            let rads = String(Phaser.Math.DegToRad(na)).substr(0, 5);
            let info = na + "°\n" + rads;
            let label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
        }

        graphics.strokePath();

        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);

        this.text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#ffffff' });
    }

    update ()
    {
        this.arrow.angle += 0.2;

        this.text.setText([
            'Sprite Rotation',
            'Angle: ' + this.arrow.angle.toFixed(2),
            'Rotation: ' + this.arrow.rotation.toFixed(2)
        ]);
    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
