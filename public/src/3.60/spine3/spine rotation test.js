class Example extends Phaser.Scene
{

    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
                ]
            }
        })
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/arrow.png');

        this.load.setPath('assets/spine/3.8/spineboy');
        this.load.spine('boy', 'spineboy-pro.json', 'spineboy-pro.atlas', true);
    }

    create ()
    {
        const matrix = new Phaser.GameObjects.Components.TransformMatrix();

        // var bob = this.add.image(0, 0, 'arrow');

        // bob.setScale(0.5, 0.8);
        // bob.setScale(-0.3, 0.3);
        // bob.setScale(0.5, -0.8);

        /*
        for (var i = 0; i <= 360; i += 22.5)
        {
            bob.setAngle(i);

            // matrix.applyITRS(bob.x, bob.y, bob.rotation, Math.abs(bob.scaleX), Math.abs(bob.scaleY));

            matrix.applyITRS(bob.x, bob.y, bob.rotation, bob.scaleX, bob.scaleY);

            //  In the following the normalized values are perfect for positive scale

            var rot = matrix.rotation;
            var rotNorm = matrix.rotationNormalized;
            var rotDeg = Phaser.Math.RadToDeg(rot);
            var rotNormDeg = Phaser.Math.RadToDeg(rotNorm);
            var rotCCW = Phaser.Math.Angle.CounterClockwise(rot);
            var rotNormCCW = Phaser.Math.Angle.CounterClockwise(rotNorm);
            var rotCCWDeg = Phaser.Math.RadToDeg(rotCCW);
            var rotNormCCWDeg = Phaser.Math.RadToDeg(rotNormCCW);
            var rotCCWDegWrapped = Phaser.Math.Wrap(rotCCWDeg + 90, 0, 360);
            var rotNormCCWDegWrapped = Phaser.Math.Wrap(rotNormCCWDeg + 90, 0, 360);

            console.log('Angle:', i);
            // console.log('a', matrix.a, 'b', matrix.b, 'c', matrix.c, 'd', matrix.d);
            // console.log('scale', matrix.scaleX, matrix.scaleY);
            console.log('rotation deg', rotDeg, 'normalized', rotNormDeg);
            console.log('ccw deg', rotCCWDeg, 'normalized', rotNormCCWDeg);
            console.log('ccw+90 deg', rotCCWDegWrapped, 'normalized', rotNormCCWDegWrapped);


            // console.log(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
            // console.log('scale', matrix.scaleX, matrix.scaleY);
            // console.log('rotation', matrix.rotation, 'normalized', matrix.rotationNormalized);
            // console.log('rotation deg', Phaser.Math.RadToDeg(matrix.rotation), 'normalized', Phaser.Math.RadToDeg(matrix.rotationNormalized));
            // console.log('ccw', Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(matrix.rotation)), 'normalized', Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(matrix.rotationNormalized)));
            // console.log('ccw+90', Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(matrix.rotation)) + 90, 'normalized', Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(matrix.rotationNormalized)) + 90);
            console.log('');
        }
        */

        const labelStyle = { font: "16px courier", fill: "#00ff00", align: "center" };
        const circle = new Phaser.Geom.Circle(350, 300, 225);
        const labelCircle = new Phaser.Geom.Circle(350, 300, 265);

        const graphics = this.add.graphics();

        graphics.lineStyle(2, 0x00bb00, 1);

        graphics.strokeCircleShape(circle);

        graphics.beginPath();

        for (let a = 0; a < 360; a += 22.5)
        {
            graphics.moveTo(350, 300);

            const p = Phaser.Geom.Circle.CircumferencePoint(circle, Phaser.Math.DegToRad(a));

            graphics.lineTo(p.x, p.y);

            const lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle, Phaser.Math.DegToRad(a));

            let na = a;

            if (a > 180)
            {
                na -= 360;
            }

            const rads = String(Phaser.Math.DegToRad(na)).substr(0, 5);
            const info = na + "°\n" + rads;
            const label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
        }

        graphics.strokePath();

        const arrow = this.add.image(350, 300, 'arrow');

        const circle2 = new Phaser.Geom.Circle(350+600, 300, 225);
        const labelCircle2 = new Phaser.Geom.Circle(350+600, 300, 265);
        const graphics2 = this.add.graphics();

        graphics2.lineStyle(2, 0x00bb00, 1);

        graphics2.strokeCircleShape(circle2);

        graphics2.beginPath();

        for (let a = 0; a < 360; a += 22.5)
        {
            const newa = Phaser.Math.RadToDeg(Phaser.Math.Angle.CounterClockwise(Phaser.Math.DegToRad(a)));

            graphics2.moveTo(350+600, 300);

            const p = Phaser.Geom.Circle.CircumferencePoint(circle2, Phaser.Math.DegToRad(a));

            graphics2.lineTo(p.x, p.y);

            const lp = Phaser.Geom.Circle.CircumferencePoint(labelCircle2, Phaser.Math.DegToRad(a));

            const rads = String(Phaser.Math.DegToRad(newa)).substr(0, 5);
            const info = String(newa).substr(0, 5) + "°\n" + rads;
            const label = this.add.text(lp.x, lp.y, info, labelStyle).setOrigin(0.5);
        }

        graphics2.strokePath();

        const spineBoy = this.add.spine(350+600, 300, 'boy', 'walk', true);

        spineBoy.setScale(0.3, 0.3);
        // spineBoy.setScale(-0.3, 0.3);

        const text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        text.setText([
            arrow.angle,
            arrow.rotation,
            spineBoy.angle,
            spineBoy.rotation,
            spineBoy.root.rotation
        ]);

        this.input.on('pointerdown', (pointer) => {

            const chunk = 22.5;
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

        });
    }

}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1300,
    height: 600,
    backgroundColor: '#2d2d66',
    scene: Example
};

const game = new Phaser.Game(config);
