var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#0072bc',
    width: 800,
    height: 600,
    dom: {
        createContainer: true
    },
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

var cursors;
var player;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();

    player = this.add.dom(400, 300, 'div', 'font-size: 96px', '💩');

    this.physics.add.existing(player, false);

    player.body.setOffset(-(player.displayWidth / 2), -(player.displayHeight / 2));

    player.body.setCollideWorldBounds(true);
}

function update ()
{
    player.body.setVelocity(0);

    if (cursors.left.isDown)
    {
        player.body.setVelocityX(-300);
    }
    else if (cursors.right.isDown)
    {
        player.body.setVelocityX(300);
    }

    if (cursors.up.isDown)
    {
        player.body.setVelocityY(-300);
    }
    else if (cursors.down.isDown)
    {
        player.body.setVelocityY(300);
    }

}
