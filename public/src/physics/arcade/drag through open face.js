var config = {
    type: Phaser.AUTO,
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

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/p2.jpg');
    this.load.image('box', 'assets/sprites/steelbox.png');
    this.load.image('bg', 'assets/tests/32pxstrip.png');
}

function create ()
{
    this.add.image(0, 0, 'bg').setOrigin(0);

    var block = this.physics.add.image(400, 300, 'block').setImmovable(true);

    //  Allow entrance through the top-face only
    block.body.setCheckCollisionUp(false);

    var player = this.physics.add.image(100, 300, 'box').setCollideWorldBounds(true);

    this.input.setDraggable(player.setInteractive());

    this.input.on('drag', function (pointer, obj, dragX, dragY)
    {
        obj.setPosition(dragX, dragY);
    });

    this.physics.add.collider(block, player);
}
