var config = {
    type: Phaser.AUTO,
    width: 864,
    height: 632,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setPath('assets/sprites');
    this.load.image('blockANP');
    this.load.image('blockBNP');
    this.load.image('blockAP');
    this.load.image('blockBP');
}

var cursors
var active

function create ()
{
    this.physics.world.setBounds(0, 0, 864, 632);

    cursors = this.input.keyboard.createCursorKeys();

    var left = this.physics.add.image(200, 196-16, 'blockANP').setCollideWorldBounds().setInteractive();
    var right = this.physics.add.image(600, 196-16, 'blockBNP').setCollideWorldBounds().setInteractive();
    var leftRect = this.physics.add.image(400, 196-16, 'blockANP').setCollideWorldBounds().setInteractive();

    var t = this.add.text(10, 10, 'Click to take control');

    window.left = left;
    window.right = right;
    window.rect = leftRect;

    // left.setBounce(0.5);
    // right.setBounce(0.5);

    // If either one of these are a circle they will get pushed.

    left.setCircle(32);
    right.setCircle(32);

    active = left;

    left.on('pointerdown', () => {

        active = left;
        t.setText('Moving left circle');

    });

    right.on('pointerdown', () => {

        active = right;
        t.setText('Moving right circle');

    });

    leftRect.on('pointerdown', () => {

        active = leftRect;
        t.setText('Moving leftRect');

    });

    // left.setPushable(false);
    // right.setPushable(false);
    // leftRect.setPushable(false);

    if (left.body.pushable)
    {
        left.setTexture('blockAP');
    }

    if (right.body.pushable)
    {
        right.setTexture('blockBP');
    }

    if (leftRect.body.pushable)
    {
        leftRect.setTexture('blockAP');
    }

    this.physics.add.collider(left, right);
    this.physics.add.collider(leftRect, right);
}

function update ()
{
    if (cursors.left.isDown)
    {
        active.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        active.setVelocityX(160);
    }
    else if (cursors.up.isDown)
    {
        active.setVelocityY(-160);
    }
    else if (cursors.down.isDown)
    {
        active.setVelocityY(160);
    }
    else {
        active.setVelocity(0)
    }
}
