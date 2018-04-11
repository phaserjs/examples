var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
   this.load.image('mushroom', 'assets/sprites/mushroom2.png');
}

function create ()
{
    var image1 = this.add.image(0, 0, 'mushroom');
    var image2 = this.add.image(-40, 60, 'mushroom');
    var image3 = this.add.image(40, 60, 'mushroom');

    var container = this.add.container(400, 200, [ image1, image2, image3 ]);

    this.physics.world.enable(container);

    container.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);
}
