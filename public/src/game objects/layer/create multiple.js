var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create ()
{
    layer = this.add.layer();

    // layer.createMultiple('diamonds', [0,1,2,3,4], {});
    // layer.createMultiple('diamonds', [0,1,2,3,4], { repeat: 1 });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { quantity: 4 });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { quantity: 2, repeat: 1 });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { randomFrame: true });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { randomFrame: true, quantity: 2 });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { yoyo: true });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { quantity: 2, yoyo: true });
    // layer.createMultiple('diamonds', [0,1,2,3,4], { repeat: 4, max: 12 });
    layer.createMultiple('diamonds', [0,1,2,3,4], { repeat: 4, max: 12 });

    layer.setXY(32, 100, 32);

    // layer.gridAlign(10, 10, 32, 32);
    // layer.incXY(100, 100);
}
