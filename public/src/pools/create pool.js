var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var cans;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('cokecan', 'assets/sprites/cokecan.png');
}

function create ()
{
    //  Our pool. Contains Sprite objects, a maximum of 10 of them.
    cans = this.pool.createSpritePool(10, 10, 'cokecan');

    console.log(cans);
    console.log(cans.isFull());

    cans.get(300, 200);
    cans.get(400, 200);
    cans.get(500, 200);

    console.log(cans.getTotalUsed());
    console.log(cans.getTotalFree());
}

function update ()
{
    // image.rotation += 0.01;
}