var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
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
        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    sprite = this.physics.add.image(400, 300, 'mushroom');

    group = this.physics.add.staticGroup({
        key: 'ball',
        frameQuantity: 30
    });

    Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

    //  We need to call this because placeOnRectangle has changed the coordinates of all the children
    //  If we don't call it, the static physics bodies won't be updated to reflect them
    group.refresh();

    sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);
}

function update ()
{
    this.physics.world.collide(sprite, group);
}
