class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.obj('roadStart', 'assets/obj/racing/roadStartPositions.obj', 'assets/obj/racing/roadStartPositions.mtl');
        this.load.obj('roadEnd', 'assets/obj/racing/roadEnd.obj', 'assets/obj/racing/roadEnd.mtl');
        this.load.obj('roadCrossing', 'assets/obj/racing/roadCrossing.obj', 'assets/obj/racing/roadCrossing.mtl');
        this.load.obj('roadCurved', 'assets/obj/racing/roadCurved.obj', 'assets/obj/racing/roadCurved.mtl');
        this.load.obj('roadStraight', 'assets/obj/racing/roadStraight.obj', 'assets/obj/racing/roadStraight.mtl');
        this.load.obj('roadStraightLong', 'assets/obj/racing/roadStraightLong.obj', 'assets/obj/racing/roadStraightLong.mtl');
        this.load.obj('roadStraightArrow', 'assets/obj/racing/roadStraightArrow.obj', 'assets/obj/racing/roadStraightArrow.mtl');
        this.load.obj('roadStraightSkew', 'assets/obj/racing/roadStraightSkew.obj', 'assets/obj/racing/roadStraightSkew.mtl');
        this.load.obj('roadSplitLarge', 'assets/obj/racing/roadSplitLarge.obj', 'assets/obj/racing/roadSplitLarge.mtl');
        this.load.obj('roadSplitRound', 'assets/obj/racing/roadSplitRound.obj', 'assets/obj/racing/roadSplitRound.mtl');
        this.load.obj('roadRampWall', 'assets/obj/racing/roadRampWall.obj', 'assets/obj/racing/roadRampWall.mtl');
        this.load.obj('roadCornerLarge', 'assets/obj/racing/roadCornerLarge.obj', 'assets/obj/racing/roadCornerLarge.mtl');
    }

    create ()
    {
        const track = this.add.mesh(400, 300);

        const rotX = Phaser.Math.DegToRad(90);
        const rotY = Phaser.Math.DegToRad(180);

        //  Add road pieces
        track.addVerticesFromObj('roadStraightArrow', 1, 0, 0, 0, rotX, rotY);
        track.addVerticesFromObj('roadStraightLong', 1, 0, 1, 0, rotX, rotY);
        track.addVerticesFromObj('roadCornerLarge', 1, 0, 3, 0, rotX, rotY);
        track.addVerticesFromObj('roadStraightLong', 1, 4, 4, 0, rotX, rotY + rotX);
        track.addVerticesFromObj('roadCornerLarge', 1, 6, 6, 0, rotX, 0);
        track.addVerticesFromObj('roadStraightArrow', 1, 5, 6, 0, rotX, rotY);
        track.addVerticesFromObj('roadCurved', 1, 5, 7, 0, rotX, rotY);
        track.addVerticesFromObj('roadCurved', 1, 4.5, 9, 0, rotX, rotY);

        //  Zoom out a bit
        track.panY(3);
        track.panZ(15);

        window.track = track;

        this.debug = this.add.graphics();

        // track.setDebug(this.debug);

        // this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', pointer => {

            if (!pointer.isDown)
            {
                return;
            }

            track.panX(pointer.velocity.x * (1 / 800));
            track.panY(pointer.velocity.y * (1 / 600));

        });

        this.input.on('wheel', (pointer, over, deltaX, deltaY, deltaZ) => {

            track.panZ(deltaY * (4 / 600));

        });
    }

    update ()
    {
        this.debug.clear();
        this.debug.lineStyle(1, 0x00ff00);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
