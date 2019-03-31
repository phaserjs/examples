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
    this.load.image('bg', 'assets/tests/32pxstrip.png');
}

function create ()
{
    this.add.image(0, 0, 'bg').setOrigin(0);

    var body1 = this.physics.add.body(300, 200, 200, 256).setImmovable(true);

    //  Top
    var body2 = this.physics.add.body(300 - 60, 10, 64, 48).setCollideWorldBounds(true);
    body2.setVelocity(0, 1000);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#000000' });

    this.physics.add.collider(body1, body2);

    monitor = body2;
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

        var blocked = monitor.blocked;
        var touching = monitor.touching;
        var worldBlocked = monitor.worldBlocked;
        var hardBlocked = monitor.hardBlocked;

        text.setText([
            'BLOCKED = None: ' + blocked.none + ' Up: ' + blocked.up + ' Down: ' + blocked.down + ' Left: ' + blocked.left + ' Right: ' + blocked.right,
            'HARD BLOCKED = None: ' + hardBlocked.none + ' Up: ' + hardBlocked.up + ' Down: ' + hardBlocked.down + ' Left: ' + hardBlocked.left + ' Right: ' + hardBlocked.right,
            'WORLD BLOCKED = None: ' + worldBlocked.none + ' Up: ' + worldBlocked.up + ' Down: ' + worldBlocked.down + ' Left: ' + worldBlocked.left + ' Right: ' + worldBlocked.right,
            'TOUCHING = None: ' + touching.none + ' Up: ' + touching.up + ' Down: ' + touching.down + ' Left: ' + touching.left + ' Right: ' + touching.right,
            '',
            'isBlockedX: ' + monitor.isBlockedX(),
            'isBlockedY: ' + monitor.isBlockedY(),
            'isBlockedUp: ' + monitor.isBlockedUp(),
            'isBlockedDown: ' + monitor.isBlockedDown(),
            'isBlockedLeft: ' + monitor.isBlockedLeft(),
            'isBlockedRight: ' + monitor.isBlockedRight(),
            '',
            'sprite x: ' + (mx - mww),
            'sprite y: ' + (my - mhh),
            'sprite right: ' + ((mx - mww) + mw),
            'sprite bottom: ' + ((my - mhh) + mh),
            '',
            'body x: ' + monitor.x,
            'body y: ' + monitor.y,
            'body right: ' + monitor.right,
            'body bottom: ' + monitor.bottom,
            '',
            'Velocity X: ' + monitor.velocity.x,
            'Velocity Y: ' + monitor.velocity.y,
            'Delta X: ' + monitor._dx,
            'Delta Y: ' + monitor._dy,
            'Speed: ' + monitor.speed,
        ]);
    }
}
