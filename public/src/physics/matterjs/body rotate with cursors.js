var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var ship;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/x2kship.png');
}

function create ()
{
    ship = this.matter.add.image(400, 300, 'ship');

    ship.setFrictionAir(0.15);
    ship.setMass(30);
    ship.setFixedRotation();

    this.matter.world.setBounds(0, 0, 800, 600);

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    if (cursors.left.isDown)
    {
        ship.setAngularVelocity(-0.1);
    }
    else if (cursors.right.isDown)
    {
        ship.setAngularVelocity(0.1);
    }

    if (cursors.up.isDown)
    {
        ship.thrust(0.08);
    }
}
