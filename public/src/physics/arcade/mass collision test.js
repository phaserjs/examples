var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;
var player;
var group;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('chunk', 'assets/sprites/rain.png');
    this.load.image('crate', 'assets/sprites/crate.png');
}

function create ()
{
    var graphics = this.add.graphics();
    graphics.fillStyle(0x000044);
    graphics.fillRect(0,140,800,460);

    this.physics.world.setBounds(0, 0, 800 * 1, 600 * 1);

    var spriteBounds = Phaser.Geom.Rectangle.Inflate(Phaser.Geom.Rectangle.Clone(this.physics.world.bounds), -10, -200);

    group = this.physics.add.group();

    for (var i = 0; i < 1000; i++)
    {
        var pos = Phaser.Geom.Rectangle.Random(spriteBounds);

        var block = group.create(pos.x, pos.y, 'chunk');

        block.setBounce(1);
        block.setCollideWorldBounds(true);
        block.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-100, -200));
        block.setMaxVelocity(300);
    }

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.image(400, 300, 'crate');

    player.setImmovable();
    player.setCollideWorldBounds(true);


}

function update ()
{
    player.setVelocity(0);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-500);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(500);
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-500);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(500);
    }

    this.physics.world.collide(player, group);
}
