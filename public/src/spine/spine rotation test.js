var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1300,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('arrow', 'assets/sprites/arrow.png');

    this.load.setPath('assets/animations/spine/');
    this.load.spine('boy', 'spineboy.json', 'spineboy.atlas');
}

function create ()
{
    var labelStyle = { font: "16px courier", fill: "#00ff00", align: "center" };
    var circle = new Phaser.Geom.Circle(350, 300, 225);
    var labelCircle = new Phaser.Geom.Circle(350, 300, 265);

    var graphics = this.add.graphics();

    graphics.lineStyle(2, 0x00bb00, 1);

    graphics.strokeCircleShape(circle);
    
    graphics.beginPath();

    for (var a = 0; a < 360; a += 22.5)
    {
        graphics.moveTo(350, 300);

        var p = Phaser.Geom.Circle.CircumferencePoint(circle, Phaser.Math.DegToRad(a));

        graphics.lineTo(p.x, p.y);

        var lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle, Phaser.Math.DegToRad(a));

        var na = a;

        if (a > 180)
        {
            na -= 360;
        }

        var rads = String(Phaser.Math.DegToRad(na)).substr(0, 5);
        var info = na + "°\n" + rads;
        var label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
    }
    
    graphics.strokePath();

    var arrow = this.add.image(350, 300, 'arrow');

    var circle2 = new Phaser.Geom.Circle(350+600, 300, 225);
    var labelCircle2 = new Phaser.Geom.Circle(350+600, 300, 265);
    var graphics2 = this.add.graphics();

    graphics2.lineStyle(2, 0x00bb00, 1);

    graphics2.strokeCircleShape(circle2);
    
    graphics2.beginPath();

    for (var a = 0; a < 360; a += 22.5)
    {
        var newa = Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(Phaser.Math.DegToRad(a)));

        graphics2.moveTo(350+600, 300);

        var p = Phaser.Geom.Circle.CircumferencePoint(circle2, Phaser.Math.DegToRad(a));

        graphics2.lineTo(p.x, p.y);

        var lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle2, Phaser.Math.DegToRad(a));

        var rads = String(Phaser.Math.DegToRad(newa)).substr(0, 5);
        var info = String(newa).substr(0, 5) + "°\n" + rads;
        var label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
    }
    
    graphics2.strokePath();

    var spineBoy = this.add.spine(350+600, 300, 'boy', 'walk', true).setScale(0.3);

    var text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    text.setText([
        arrow.angle,
        arrow.rotation,
        spineBoy.angle,
        spineBoy.rotation,
        spineBoy.root.rotation
    ]);

    this.input.on('pointerdown', function (pointer) {

        var chunk = 22.5;
        // var chunk = Phaser.Math.PI2 / 16;

        if (pointer.x < 800)
        {
            arrow.angle -= chunk;
            spineBoy.angle -= chunk;
            // arrow.rotation -= chunk;
            // spineBoy.root.rotation -= chunk;
        }
        else
        {
            arrow.angle += chunk;
            spineBoy.angle += chunk;
            // arrow.rotation += chunk;
            // spineBoy.root.rotation += chunk;
        }

        text.setText([
            arrow.angle,
            arrow.rotation,
            spineBoy.angle,
            spineBoy.rotation,
            spineBoy.root.rotation
        ]);

    }, this);
}
