var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

var game = new Phaser.Game(config);

var image1;
var image2;
var image3;
var bounds1;
var bounds2;
var bounds3;

function preload() {

    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('bunny', 'assets/sprites/bunny.png');
    this.load.image('tetris', 'assets/sprites/tetrisblock1.png');

}

function create() {

    image1 = this.add.image(800, 200, 'eye');
    image2 = this.add.image(180, 150, 'tetris');
    image3 = this.add.image(400, 300, 'bunny');

    bounds1 = image1.getBounds();
    bounds2 = image2.getBounds();
    bounds3 = image3.getBounds();

}

function update() {

    image1.rotation += 0.013;
    image2.rotation += 0.015;
    image3.rotation -= 0.010;

    bounds1 = image1.getBounds();
    bounds2 = image2.getBounds();
    bounds3 = image3.getBounds();
}

function render() {

    var ctx = this.sys.context;

    ctx.strokeStyle = 'rgba(255,0,0,1)';
    ctx.strokeRect(bounds1.x, bounds1.y, bounds1.width, bounds1.height);

    ctx.strokeStyle = 'rgba(255,255,0,1)';
    ctx.strokeRect(bounds2.x, bounds2.y, bounds2.width, bounds2.height);

    ctx.strokeStyle = 'rgba(0,225,0,1)';
    ctx.strokeRect(bounds3.x, bounds3.y, bounds3.width, bounds3.height);

}
