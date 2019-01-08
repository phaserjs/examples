var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1600,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: {
        preload: preload,
        create: create,
        pack: {
            files: [
                { type: 'scenePlugin', key: 'SpineWebGLPlugin', url: 'plugins/SpineWebGLPlugin.js', sceneKey: 'spine' }
            ]
        }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/sprites/phaser.png');
    this.load.image('arrow', 'assets/sprites/arrow.png');

    // this.load.setPath('assets/animations/spine/webgl/');
    // this.load.spine('boy', 'spineboy-ess.json', 'spineboy.atlas');

    this.load.setPath('assets/animations/spine/');
    this.load.spine('boy', 'spineboy.json', 'spineboy.atlas');
}

function create ()
{
    // this.add.image(0, 0, 'logo').setOrigin(0);

    var labelStyle = { font: "16px courier", fill: "#00ff00", align: "center" };
    var circle = new Phaser.Geom.Circle(400, 300, 225);
    var labelCircle = new Phaser.Geom.Circle(400, 300, 265);

    var graphics = this.add.graphics();

    graphics.lineStyle(2, 0x00bb00, 1);

    graphics.strokeCircleShape(circle);
    
    graphics.beginPath();

    for (var a = 0; a < 360; a += 22.5)
    {
        graphics.moveTo(400, 300);

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

    var arrow = this.add.image(400, 300, 'arrow');

    var circle2 = new Phaser.Geom.Circle(400+800, 300, 225);
    var labelCircle2 = new Phaser.Geom.Circle(400+800, 300, 265);
    var graphics2 = this.add.graphics();

    graphics2.lineStyle(2, 0x00bb00, 1);

    graphics2.strokeCircleShape(circle2);
    
    graphics2.beginPath();

    var convert = function (angle)
    {
        return Math.abs((((angle + 90) % 360) - 360) % 360);
    };

    // console.log(convert(0));
    // console.log(convert(45));
    // console.log(convert(90));
    // console.log(convert(135));
    // console.log(convert(180));
    // console.log(convert(-45));
    // console.log(convert(-90));
    // console.log(convert(-135));
    // console.log(convert(-180));

    for (var a = 0; a < 360; a += 22.5)
    {
        var newa = convert(a);

        graphics2.moveTo(400+800, 300);

        var p = Phaser.Geom.Circle.CircumferencePoint(circle2, Phaser.Math.DegToRad(a));

        graphics2.lineTo(p.x, p.y);

        var lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle2, Phaser.Math.DegToRad(a));

        var rads = String(Phaser.Math.DegToRad(newa)).substr(0, 5);
        var info = newa + "°\n" + rads;
        var label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
    }
    
    graphics2.strokePath();

    var spineBoy = this.add.spine(400+800, 300, 'boy', 'walk', true).setScale(0.3);

    spineBoy.rot = Phaser.Math.DegToRad(convert(arrow.angle - 90));
    var aa = Phaser.Math.RadToDeg(spineBoy.rot - 1.5707963267948966);
    var bb = convert(aa);
    spineBoy.rotcc = Phaser.Math.DegToRad(bb);

    var text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    this.input.on('pointerdown', function () {

        spineBoy.angle += 22.5;
        arrow.angle += 22.5;

        // spineBoy.rot = Phaser.Math.DegToRad(convert(arrow.angle - 90));
        // spineBoy.rot = Phaser.Math.DegToRad(convert(arrow.angle));

        //  This works!
        // spineBoy.rot += (0.017453292519943295 * 22.5);
        // aa = Phaser.Math.RadToDeg(spineBoy.rot - 1.5707963267948966);
        // bb = convert(aa);
        // spineBoy.rotcc = Phaser.Math.DegToRad(bb);

        aa = Phaser.Math.RadToDeg(spineBoy.rotation - 1.5707963267948966);
        bb = convert(aa);
        spineBoy.rotcc = Phaser.Math.DegToRad(bb);



        text.setText([ spineBoy.rotation, aa, bb, spineBoy.rotcc ]);

        // text.setText([ spineBoy.rot, spineBoy.rotation, spineBoy.rot, convert(Phaser.Math.RadToDeg(spineBoy.rot)), '', arrow.angle, spineBoy.rotation, ]);

    }, this);
}
