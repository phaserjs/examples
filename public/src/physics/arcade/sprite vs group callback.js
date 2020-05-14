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
        create: create
    }
};

var sprite;
var group;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    sprite = this.physics.add.image(400, 300, 'mushroom');

    group = this.physics.add.group({
        key: 'ball',
        frameQuantity: 30,
        immovable: true
    });

    Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));

    sprite.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true).setGravityY(200);

    this.physics.add.collider(
        sprite,
        group,
        // Callback arguments are always (1) sprite, (2) sprite-in-group
        function (_sprite, ball)
        {
            ball.setAlpha(0.5);
        }
    );
}
