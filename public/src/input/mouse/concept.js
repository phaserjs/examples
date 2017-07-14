var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var x = 0;
var y = 0;
var chunk;
var logo;
var d;

var game = new Phaser.Game(config);

function preload () {

    this.load.image('logo', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('chunk', 'assets/sprites/chunk.png');

}

function create () {

    this.add.image(0, 0, 'logo').setOrigin(0).setAlpha(0.25);

    logo = this.add.image(500, 300, 'logo').setOrigin(0);
    // logo = this.add.image(500, 300, 'logo');
    logo.setScale(0.6, 1.4);
    logo.angle = 25;

    chunk = this.add.image(0, 0, 'chunk');

    var _this = this;

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {

        x = event.x;
        y = event.y;

    });

    d = this.add.text(32, 400);

}

function update () {

    logo.rotation += 0.005;

    var p = this.input.getTransformedPoint(logo, x, y);

    // chunk.x = logo.x + p.x;
    // chunk.y = logo.y + p.y;

    chunk.x = p.x + (logo.displayWidth / 2);
    chunk.y = p.y + (logo.displayHeight / 2);

    var within = this.input.pointWithinGameObject(logo, p.x, p.y);

    if (within)
    {
        logo.alpha = 1;
    }
    else
    {
        logo.alpha = 0.5;
    }

    d.setText('x: ' + x + ' y: ' + y + '\n' + 'tx: ' + p.x + ' ty: ' + p.y);

}