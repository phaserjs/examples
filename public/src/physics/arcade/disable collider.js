var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var collider;
var text;

new Phaser.Game(config);

function preload ()
{
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    var sprite = this.physics.add.image(400, 300, 'mushroom');

    var group = this.physics.add.staticGroup({
        key: 'ball',
        frameQuantity: 30
    });

    Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

    //  We need to call this because placeOnRectangle has changed the coordinates of all the children
    //  If we don't call it, the static physics bodies won't be updated to reflect them
    group.refresh();

    sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);

    text = this.add.text(10, 20);

    collider = this.physics.add.collider(sprite, group);

    this.input.on('pointerup', function ()
    {
        collider.active = false;
    });
}

function update ()
{
    text.setText('Collider active: ' + collider.active);
}
