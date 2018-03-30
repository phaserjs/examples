var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

var image;
var ui_camera;
var ui_text1;
var ui_text2;
var ui_text3;

function preload() 
{
    this.load.image('einstein', 'assets/pics/ra-einstein.png');
}

function create() 
{
    image = this.add.image(400, 300, 'einstein');

    ui_text1 = this.add.text(400, 50, "0");
    ui_text2 = this.add.text(400, 100, "0");
    ui_text3 = this.add.text(400, 150, "0");

    ui_camera = this.cameras.add(0, 0, 800, 600);

    this.cameras.main.ignore([ui_text1, ui_text2, ui_text3]);
    ui_camera.ignore(image);
}

function update() 
{
    ui_text1.setText("main camera rotation: " + this.cameras.main.rotation);
    ui_text2.setText("main camera zoom: " + this.cameras.main.zoom);
    ui_text3.setText("main camera shake X: " + this.cameras.main._shakeOffsetX);

    this.cameras.main.setZoom(Math.abs(Math.sin(this.cameras.main.rotation)) * 0.5 + 1);
    this.cameras.main.rotation += 0.01;
    this.cameras.main.shake(500, 0.001);
}
