var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var gui;
var graphics;
var bounds;
var conv;
var sprite;
var matrix;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    //  create a little marker
    $('<div />', { id: 'flow' }).appendTo('body');
    $('#flow').css('display', 'block');
    $('#flow').css('position', 'absolute');
    $('#flow').css('left', '0');
    $('#flow').css('top', '0');
    $('#flow').css('width', '128px');
    $('#flow').css('height', '128px');
    $('#flow').css('background', 'url(assets/pics/lance-overdose-loader-eye.png) no-repeat');

    $('<div />', { id: 'marker' }).appendTo('body');
    $('#marker').css('display', 'block');
    $('#marker').css('position', 'absolute');
    $('#marker').css('width', '6px');
    $('#marker').css('height', '6px');
    $('#marker').css('backgroundColor', '#ffffff');
    $('#marker').css('border', '1px solid red');

    graphics = this.add.graphics();

    bounds = new Phaser.Geom.Rectangle(0, 0, 1600, 1200);

    // this.add.sprite(0, 0, 'eye').setAlpha(0.5).setOrigin(0).setAngle(23);

    sprite = this.add.sprite(200, 200, 'eye').setAlpha(1).setOrigin(0).setScrollFactor(2, 0.5).setScale(2.1, 4.56).setAngle(22).setInteractive();

    matrix = new Phaser.GameObjects.Components.TransformMatrix();

    // this.add.sprite(200, 200, 'eye').setInteractive();

    // this.add.sprite(200, 200, 'eye').setAngle(25).setScale(2, 0.5).setInteractive();

    // for (var i = 0; i < 16; i++)
    // {
    //     var x = Phaser.Math.Between(bounds.left, bounds.right);
    //     var y = Phaser.Math.Between(bounds.top, bounds.bottom);

    //     this.add.sprite(x, y, 'eye').setInteractive();
    // }

        // var p = this.cameras.main.getWorldPoint(event);

    this.input.on('gameobjectover', function (pointer, gameObject) {

        gameObject.setTint(0xff0000);

    });

    this.input.on('gameobjectout', function (pointer, gameObject) {

        gameObject.clearTint();

    });

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    controls = (Phaser.Cameras.Controls.Smoothed) ? new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig) : new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

    this.input.keyboard.on('keydown_Z', function (event) {

        this.cameras.main.rotation += 0.01;

    }, this);

    this.input.keyboard.on('keydown_X', function (event) {

        this.cameras.main.rotation -= 0.01;

    }, this);

    var cam = this.cameras.main;

    gui = new dat.GUI();

    conv = {
        cx: 0,
        cy: 0,
        px: 0,
        py: 0
    };

    var p1 = gui.addFolder('Pointer');
    p1.add(this.input, 'x').listen();
    p1.add(this.input, 'y').listen();
    p1.add(conv, 'cx').listen();
    p1.add(conv, 'cy').listen();
    p1.add(conv, 'px').listen();
    p1.add(conv, 'py').listen();
    p1.open();

    var help = {
        line1: 'Cursors to move',
        line2: 'Q & E to zoom',
        line3: 'Z & X to rotate',
    }

    var f1 = gui.addFolder('Camera');
    f1.add(cam, 'x').listen();
    f1.add(cam, 'y').listen();
    f1.add(cam, 'scrollX').listen();
    f1.add(cam, 'scrollY').listen();
    f1.add(cam, 'rotation').min(0).step(0.01).listen();
    f1.add(cam, 'zoom', 0.1, 2).step(0.1).listen();
    f1.add(help, 'line1');
    f1.add(help, 'line2');
    f1.add(help, 'line3');
    f1.open();
}

function update (time, delta)
{
    controls.update(delta);

    var camera = this.cameras.main;

    // camera.setPosition(200);

    var p = camera.getWorldPoint(this.input.x, this.input.y);

    conv.cx = p.x;
    conv.cy = p.y;

    //  Adjust for sprite scroll factor
    p.x += (camera.scrollX * sprite.scrollFactorX) - camera.scrollX;
    p.y += (camera.scrollY * sprite.scrollFactorY) - camera.scrollY;

    var point = Phaser.Math.TransformXY(p.x, p.y, sprite.x, sprite.y, sprite.rotation, sprite.scaleX, sprite.scaleY);

    conv.px = point.x;
    conv.py = point.y;

    $('#marker').offset({ top: point.y, left: point.x });

    graphics.clear();

    //  camera marker
    graphics.lineStyle(1, 0x00ff00);
    graphics.strokeRectShape(bounds);
    graphics.lineBetween(0, 0, 1600, 1200);
    graphics.lineBetween(1600, 0, 0, 1200);

    graphics.fillStyle(0xff0000);
    graphics.fillRect(point.x, point.y, 6, 6);
}
