var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    backgroundColor: '#cdcdcd',
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
    this.load.image('logo', 'assets/sprites/phaser.png');

    this.load.setPath('assets/spine/demos/');

    this.load.spine('set1', 'demos.json', [ 'atlas1.atlas', 'atlas2.atlas', 'heroes.atlas' ]);
}

function create ()
{
    this.add.image(0, 0, 'logo').setOrigin(0);

    // var b = this.add.spine(400, 500, 'set1.alien').setScale(0.5);
    // var b = this.add.spine(400, 500, 'set1.armorgirl').setScale(0.2);
    // var b = this.add.spine(400, 500, 'set1.dragon').setScale(0.5);
    var b = this.add.spine(600, 750, 'set1.greengirl').setScale(0.8);
    // var b = this.add.spine(400, 500, 'set1.heroes').setSkinByName('Assassin');
    // var b = this.add.spine(400, 700, 'set1.orangegirl').setScale(1);
    // var b = this.add.spine(400, 500, 'set1.raptor').setScale(0.6);
    // var b = this.add.spine(400, 500, 'set1.spineboy').setScale(1);
    // var b = this.add.spine(400, 500, 'set1.stretchyman').setScale(0.4);
    // var b = this.add.spine(400, 500, 'set1.tank').setScale(0.1);
    // var b = this.add.spine(400, 500, 'set1.vine').setScale(0.5);

    b.setInteractive();

    // this.input.enableDebug(b, 0xff00ff);

    // this.add.rectangle(b.x, b.y, 4, 4, 0x00ff00);


    var anims = b.getAnimationList();

    console.log(anims);

    // var text = this.add.text(10, 10, 'click it', { font: '16px Courier', fill: '#00ff00' }).setShadow(1, 1);

    b.on('pointerover', function () {

        // text.setText('Over');

        // console.log(b.skeleton.x, b.skeleton.y);

    });

    b.on('pointerout', function () {

        // text.setText('Out');

    });

    this.input.on('pointerdown', function () {

        // var bounds = b.getBounds();

        // console.log(bounds.offset, bounds.size);
        // console.log(b.width, b.height, b.displayOriginX, b.displayOriginY);

        // console.log(b.skeleton.x, b.skeleton.y);

        // Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.
        // offset - An output value, the distance from the skeleton origin to the bottom left corner of the AABB.
        // size - An output value, the width and height of the AABB.


        // var ox = b.skeleton.x;
        // var oy = 600 - b.skeleton.y;
        // var oy = 600 - b.y;

        // var ox = b.x;
        // var oy = b.y;


        // var r = this.add.rectangle(bounds.offset.x, 768 - bounds.offset.y, bounds.size.x, bounds.size.y).setStrokeStyle(1, 0x00ff00).setOrigin(0, 1);

        // console.log(r.x, r.y);

        b.play(anims[0], true);

    }, this);
}
