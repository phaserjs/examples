var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 180 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var sprite;
var group;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/crate.png');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    var block = this.physics.add.image(400, 300, 'block').setVelocity(-100, 200).setBounce(1, 1);

    sprite = this.physics.add.image(400, 300, 'mushroom');

    group = this.physics.add.staticGroup({
        key: 'ball',
        frameQuantity: 30
    });

    Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

    group.refresh();

    sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

    this.add.text(20, 20, 'Click to toggle mushroom collisions');

    this.physics.add.collider(sprite, group);
    this.physics.add.collider(block, group);

    this.input.on('pointerdown', function () {
        sprite.body.checkCollision.none = !sprite.body.checkCollision.none;
    });
}

function update () {
    sprite.body.debugBodyColor = sprite.body.checkCollision.none ? 0xffff00 : 0xff0000;
}
