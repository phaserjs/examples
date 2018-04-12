var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
    this.load.spritesheet('cursor', 'assets/sprites/centroid.png', { frameWidth: 16, frameHeight: 16 });
}

function create ()
{
    var cam1 = this.cameras.main.setName('Camera 1');

    // cam1.x = 100;
    // cam1.y = 100;
    // cam1.zoom = 0.8;
    // cam1.rotation = 0.2;

    this.add.image(0, 0, 'grid').setOrigin(0).setAlpha(0.5);

    var container = this.add.container(100, 100);

    var sprite = this.add.sprite(100, 100, 'eye').setInteractive();

    container.add(sprite);

    var text = this.add.text(10, 10, 'Click on sprite', { font: '16px Courier', fill: '#00ff00' });

    var cursor1 = this.add.image(50, 50, 'cursor', 0);
    var cursor2 = this.add.image(50, 50, 'cursor', 1);

    this.input.on('pointerdown', function (pointer) {

        var result = this.input.manager.debugHitTest(pointer.x, pointer.y, sprite, cam1);

        cursor1.setPosition(pointer.x, pointer.y);
        cursor2.setPosition(result[1].x, result[1].y);

        text.setText([
            'down x: ' + pointer.x,
            'down y: ' + pointer.y,
            '',
            'x: ' + result[0].tx,
            'y: ' + result[0].ty,
            'sx: ' + result[0].scaleX,
            'sy: ' + result[0].scaleY,
            'r: ' + Phaser.Math.RadToDeg(result[0].rotation),
            '',
            'px: ' + result[1].x,
            'py: ' + result[1].y,
            '',
            'In: ' + result[2]
        ]);

    }, this);

    var gui = new dat.GUI();

    var p1 = gui.addFolder('Pointer');
    p1.add(this.input, 'x').listen();
    p1.add(this.input, 'y').listen();
    p1.open();

    var c1 = gui.addFolder('Camera');
    c1.add(cam1, 'x').listen();
    c1.add(cam1, 'y').listen();
    c1.add(cam1, 'scrollX').listen();
    c1.add(cam1, 'scrollY').listen();
    c1.add(cam1, 'rotation').min(0).step(0.01).listen();
    c1.add(cam1, 'zoom', 0.1, 2).step(0.1).listen();
    c1.open();
}
