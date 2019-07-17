var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
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
    this.load.setPath('assets/spine/demos/');

    this.load.spine('set1', 'demos.json', 'atlas1.atlas');
}

function create ()
{
    var b = this.add.spine(400, 500, 'set1.alien').setScale(0.4);

    // console.log(b.getBounds());

    var d = b.getBounds();

    var r = new Phaser.Geom.Rectangle(0, -d.size.y / 2, d.size.x, d.size.y);

    b.setInteractive(r, Phaser.Geom.Rectangle.Contains);

    // console.log(b);

    var text = this.add.text(10, 10, 'click it', { font: '16px Courier', fill: '#00ff00' }).setShadow(1, 1);

    b.on('pointerover', function () {

        text.setText('Over');

    });

    b.on('pointerout', function () {

        text.setText('Out');

    });

    b.once('pointerdown', function () {

        b.play('death', false);

    });
}
