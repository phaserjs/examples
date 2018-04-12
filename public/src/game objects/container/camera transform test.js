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
}

function create ()
{
    var cam1 = this.cameras.main.setName('Camera 1');

    this.add.image(0, 0, 'grid').setOrigin(0).setAlpha(0.5);

    var container = this.add.container(100, 100);

    var sprite = this.add.sprite(100, 100, 'eye').setInteractive();

    container.add(sprite);

    this.input.on('gameobjectover', function (pointer, gameObject) {

        gameObject.setTint(0xff0000);

    });

    this.input.on('gameobjectout', function (pointer, gameObject) {

        gameObject.clearTint();

    });

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
