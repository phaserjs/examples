var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var sprites = [];
var mouse = { x: 0, y: 0, hasMoved: false };

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ball', 'assets/sprites/wizball.png');
    this.load.image('chick', 'assets/sprites/budbrain_chick.png');
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    this.load.image('ship', 'assets/sprites/thrust_ship2.png');
    this.load.image('car', 'assets/pics/supercars-parsec.png');
}

function create ()
{
    var sprite1 = this.add.sprite(200, 550, 'car').setOrigin(0);

    sprite1.setHitArea(new Phaser.Geom.Polygon([ 0, 143, 0, 92, 110, 40, 244, 4, 330, 0, 458, 12, 574, 18, 600, 79, 594, 153, 332, 152, 107, 157 ]), Phaser.Geom.Polygon.Contains);

    var sprite2 = this.add.sprite(150, 150, 'ball').setScale(2);

    sprite2.setHitArea(new Phaser.Geom.Circle(0, 0, 45), Phaser.Geom.Circle.Contains);

    var sprite3 = this.add.sprite(600, 200, 'chick').setScale(2);

    sprite3.setHitArea(new Phaser.Geom.Ellipse(-33, -66, 66, 133), Phaser.Geom.Ellipse.Contains);

    var sprite4 = this.add.sprite(350, 300, 'eye');

    sprite4.setHitArea(new Phaser.Geom.Rectangle(-64, -64, 128, 128), Phaser.Geom.Rectangle.Contains);

    var sprite5 = this.add.sprite(850, 350, 'ship').setScale(8);

    sprite5.setHitArea(new Phaser.Geom.Triangle.BuildEquilateral(0, -18, 30), Phaser.Geom.Triangle.Contains);

    sprites.push(sprite1);
    sprites.push(sprite2);
    sprites.push(sprite3);
    sprites.push(sprite4);
    sprites.push(sprite5);

    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {

        mouse.x = event.x;
        mouse.y = event.y;
        mouse.hasMoved = true;

    });
}

function update ()
{
    // sprites.forEach(function (sprite) {

    //     sprite.rotation += 0.001;

    // });

    if (!mouse.hasMoved)
    {
        return;
    }

    sprites.forEach(function (sprite) {

        sprite.clearTint();

    });

    var objects = this.input.pointScreenToWorldHitTest(sprites, mouse.x, mouse.y, this.cameras.main);

    for (var i = 0; i < objects.length; i++)
    {
        objects[i].setTint(0x7878ff);
    }

    mouse.hasMoved = false;
}
