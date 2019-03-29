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
        create: create,
        update: update
    }
};

var text;
var monitor = null;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/p2.jpg');
    this.load.image('box', 'assets/sprites/steelbox.png');
    this.load.image('chunk', 'assets/sprites/chunk.png');
    this.load.image('bg', 'assets/tests/32pxstrip.png');
}

function create ()
{
    this.add.image(0, 0, 'bg').setOrigin(0);

    var block = this.physics.add.image(400, 300, 'block').setImmovable(true).setName('big');

    //  Allow entrance through the top-face only
    // block.body.setCheckCollisionUp(false);
    // block.body.setCheckCollisionDown(false);

    // var block2 = this.physics.add.image(700, 500, 'box').setImmovable(true);
    // var block3 = this.physics.add.image(200, 500, 'chunk').setImmovable(true);

    var player = this.physics.add.image(100, 300, 'box').setCollideWorldBounds(true).setName('small');

    player.body.setDirectControl();

    this.input.setDraggable(player.setInteractive());

    this.input.on('drag', function (pointer, obj, dragX, dragY)
    {
        obj.body.setPosition(dragX - 32, dragY - 32);
    });

    monitor = player;

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#000000' });

    this.physics.add.collider(player, block);

    // this.physics.add.collider(player, [ block, block2, block3 ]);
}

function update (time)
{
    if (monitor)
    {
        var mx = monitor.x;
        var my = monitor.y;
        var mh = monitor.height;
        var mw = monitor.width;
        var mww = mw / 2;
        var mhh = mh / 2;

        var blocked = monitor.body.blocked;
        var touching = monitor.body.touching;
        var worldBlocked = monitor.body.worldBlocked;
        var hardBlocked = monitor.body.hardBlocked;

            // 'isBlockedX: ' + monitor.body.isBlockedX(),
            // 'isBlockedY: ' + monitor.body.isBlockedY(),
            // 'isBlockedUp: ' + monitor.body.isBlockedUp(),
            // 'isBlockedDown: ' + monitor.body.isBlockedDown(),
            // 'isBlockedLeft: ' + monitor.body.isBlockedLeft(),
            // 'isBlockedRight: ' + monitor.body.isBlockedRight(),


        text.setText([
            'BLOCKED = None: ' + blocked.none + ' Up: ' + blocked.up + ' Down: ' + blocked.down + ' Left: ' + blocked.left + ' Right: ' + blocked.right,
            'HARD BLOCKED = None: ' + hardBlocked.none + ' Up: ' + hardBlocked.up + ' Down: ' + hardBlocked.down + ' Left: ' + hardBlocked.left + ' Right: ' + hardBlocked.right,
            'WORLD BLOCKED = None: ' + worldBlocked.none + ' Up: ' + worldBlocked.up + ' Down: ' + worldBlocked.down + ' Left: ' + worldBlocked.left + ' Right: ' + worldBlocked.right,
            'TOUCHING = None: ' + touching.none + ' Up: ' + touching.up + ' Down: ' + touching.down + ' Left: ' + touching.left + ' Right: ' + touching.right,
            '',
            'sprite x: ' + (mx - mww),
            'sprite y: ' + (my - mhh),
            'sprite right: ' + ((mx - mww) + mw),
            'sprite bottom: ' + ((my - mhh) + mh),
            '',
            'embedded: ' + monitor.body.embedded,
            '',
            'body x: ' + monitor.body.x,
            'body y: ' + monitor.body.y,
            'body right: ' + monitor.body.right,
            'body bottom: ' + monitor.body.bottom,
            '',
            'Velocity X: ' + monitor.body.velocity.x,
            'Velocity Y: ' + monitor.body.velocity.y,
            'Delta X: ' + monitor.body._dx,
            'Delta Y: ' + monitor.body._dy,
            'Speed: ' + monitor.body.speed,
        ]);
    }
}
