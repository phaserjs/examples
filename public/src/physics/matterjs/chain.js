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
                y: 1
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var block;
var cursors;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    block = this.physics.add.image(400, 50, 'block', null, { ignoreGravity: true });
    block.setFixedRotation();
    block.setMass(500);
    block.setCollisionCategory(this.physics.world.nextCategory());

    //  Create a chain 100px between each segment

    var y = 150;
    var prev = block;
    var cat = this.physics.world.nextCategory();

    for (var i = 0; i < 14; i++)
    {
        var ball = this.physics.add.image(400, y, 'ball', null, { isCircle: true });

        ball.setCollisionCategory(cat);
        ball.setMass(0.1);

        this.physics.add.joint(prev, ball, (i === 0) ? 90 : 40, 0.4);

        prev = ball;

        y += 18;
    }

    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    if (cursors.left.isDown)
    {
        block.setVelocityX(-20);
    }
    else if (cursors.right.isDown)
    {
        block.setVelocityX(20);
    }
    else
    {
        block.setVelocityX(0);
    }

    if (cursors.up.isDown)
    {
        block.setVelocityY(-20);
    }
    else if (cursors.down.isDown)
    {
        block.setVelocityY(20);
    }
    else
    {
        block.setVelocityY(0);
    }
}
