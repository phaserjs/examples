var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var graphics;
var cursors;
var text;
var moveCam = false;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bg', 'assets/pics/the-end-by-iloe-and-made.jpg');
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    //  Set the camera and physics bounds to be the size of 4x4 bg images
    this.cameras.main.setBounds(0, 0, 1920 * 2, 1080 * 2);
    this.physics.world.setBounds(0, 0, 1920 * 2, 1080 * 2);

    //  Mash 4 images together to create our background
    this.add.image(0, 0, 'bg').setOrigin(0);
    this.add.image(1920, 0, 'bg').setOrigin(0).setFlipX(true);
    this.add.image(0, 1080, 'bg').setOrigin(0).setFlipY(true);
    this.add.image(1920, 1080, 'bg').setOrigin(0).setFlipX(true).setFlipY(true);

    cursors = this.input.keyboard.createCursorKeys();

    player = this.physics.add.image(400, 300, 'block');

    player.setCollideWorldBounds(true);

    this.cameras.main.startFollow(player);

    this.cameras.main.deadzone = new Phaser.Geom.Rectangle(100, 100, 600, 400);

    this.input.on('pointerdown', function () {
        moveCam = (moveCam) ? false: true;
    });

    graphics = this.add.graphics();
    text = this.add.text(10, 10).setScrollFactor(0);
}

function update ()
{
    var cam = this.cameras.main;

    text.setText([
        'Cam Control: ' + moveCam,
        'ScrollX: ' + cam.scrollX,
        'ScrollY: ' + cam.scrollY,
        'MidX: ' + cam.midPoint.x,
        'MidY: ' + cam.midPoint.y,
        'fx: ' + cam._fx,
        'fy: ' + cam._fy,
        'deadzone left: ' + cam.deadzone.left,
        'deadzone right: ' + cam.deadzone.right,
        'deadzone top: ' + cam.deadzone.top,
        'deadzone bottom: ' + cam.deadzone.bottom
    ]);

    graphics.clear();
    graphics.lineStyle(2, 0x00ff00, 1);
    graphics.strokeRectShape(cam.deadzone);
 
    player.setVelocity(0);

    if (moveCam)
    {
        if (cursors.left.isDown)
        {
            cam.scrollX--;
        }
        else if (cursors.right.isDown)
        {
            cam.scrollX++;
        }
    
        if (cursors.up.isDown)
        {
            cam.scrollY--;
        }
        else if (cursors.down.isDown)
        {
            cam.scrollY++;
        }
    }
    else
    {
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
    }

}