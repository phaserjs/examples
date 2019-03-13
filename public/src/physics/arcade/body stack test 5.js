var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 50 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var size;
var text;
var monitor = null;
var blocks = [];
var stop = false;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bar', 'assets/sprites/bluebar.png');
    this.load.image('block', 'assets/sprites/crate32.png');
    this.load.image('block2', 'assets/sprites/crate.png');
    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('car', 'assets/sprites/car90.png');
}

function create ()
{
    size = 'block2';

    var b = this.physics.add.image(400, 400, size).setName('0').setInteractive();
    b.setVelocityY(0)
    b.setCollideWorldBounds(true);
    b.setImmovable(false);
    b.setBounce(0.8);

    blocks.push(b);

    this.input.on('gameobjectdown', function (pointer, gameobject, event) {

        if (monitor)
        {
            monitor.setTint(0xffffff);
        }

        monitor = gameobject;
        monitor.setTint(0xff0000);

        event.stopPropagation();

    }, this);

    this.input.on('pointerdown', function (pointer) {

        var x = pointer.x;
        var y = pointer.y;
        // var y = 152;

        var b = this.physics.add.image(x, y, size).setName(blocks.length).setInteractive();

        //  35 = problem?
        console.log('created at', y);

        b.setVelocityY(Phaser.Math.Between(200, 400));
        b.setCollideWorldBounds(true);
        b.setImmovable(false);
        b.setBounce(0.8);

        blocks.push(b);

        if (monitor)
        {
            monitor.setTint(0xffffff);
            monitor = null;
        }

    }, this);

    this.input.keyboard.on('keydown-A', function () {
        size = 'block';
    }, this);

    this.input.keyboard.on('keydown-B', function () {
        size = 'block2';
    }, this);

    this.input.keyboard.on('keydown-C', function () {
        size = 'bar';
    }, this);

    this.input.keyboard.on('keydown-D', function () {
        size = 'bullet';
    }, this);

    this.input.keyboard.on('keydown-E', function () {
        size = 'car';
    }, this);

    this.input.keyboard.on('keydown-SPACE', function () {
        console.log('stop');
        this.physics.world.isPaused = true;
        stop = true;
    }, this);

    text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

    if (Phaser.VERSION !== '3.17.0')
    {
        this.physics.add.collider(blocks, blocks);
    }
    // this.physics.add.collider(blocks, blocks);
}

function update (time)
{
    if (stop)
    {
        return;
    }

    if (Phaser.VERSION === '3.17.0')
    {
        this.physics.collide(blocks);
        // this.physics.collide(blocks, blocks);
    }

    if (monitor)
    {
        text.setText([
            'size: ' + size,
            'name: ' + monitor.name,
            'up: ' + monitor.body.blocked.up,
            'down: ' + monitor.body.blocked.down,
            'tup: ' + monitor.body.touching.up,
            'tdown: ' + monitor.body.touching.down,
            'y: ' + monitor.body.y,
            'bot: ' + monitor.body.bottom,
            'vy: ' + monitor.body.velocity.y,
            'dy: ' + monitor.body._dy
        ]);

            // 'by: ' + ((monitor.body.blocked.by !== null) ? monitor.body.blocked.by.gameObject.name : 'none'),
    }
    else
    {
        text.setText('size: ' + size);
    }
}
