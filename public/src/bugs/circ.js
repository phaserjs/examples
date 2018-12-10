var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
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
        create: create,
        update: update
    }
};

var sprite;
var static1;
var static2;
var static3;

var game = new Phaser.Game(config);

function preload ()
{
   this.load.image('bar', 'assets/sprites/healthbar.png');
   this.load.image('mushroom', 'assets/sprites/mushroom2.png');
}

function create ()
{
   sprite = this.physics.add.image(100, 100, 'mushroom');
   sprite.setCircle(sprite.width / 2)
   static1 = this.physics.add.staticImage(200, 200, 'bar');
   static2 = this.physics.add.staticImage(320, 200, 'bar');

    sprite.body.setVelocity(100, 200).setBounce(1, 1).setCollideWorldBounds(true);

    this.physics.add.collider(sprite, [ static1, static2, static3 ]);

    this.input.on('pointerdown', function () {
    
        static1.x -= 200;
        static1.setScale(3, 5);
        static1.refreshBody();
    
    }, this);
}

function update ()
{
    // this.physics.world.collide(sprite, [ static1, static2, static3 ]);
}
