var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('land', 'assets/sprites/advanced_wars_land.png');
}

function create ()
{
    var container = this.add.container(400, 300);

    // var image = this.add.tileSprite(0, 0, 512, 256, 'mushroom');

    var image = this.add.image(0, 0, 'land');

    container.add(image);

    image.setInteractive();

    image.setAngle(0);
    console.log(0, image._rotation);

    image.setAngle(90);
    console.log(90, image._rotation);

    image.setAngle(-90);
    console.log(-90, image._rotation);

    image.setAngle(180);
    console.log(180, image._rotation);

    image.setAngle(-180);
    console.log(-180, image._rotation);

    container.setAngle(-190);
    image.setAngle(260);



    image.on('pointerdown', function () {

        this.setTint(Math.random() * 16000000);

    });
}
