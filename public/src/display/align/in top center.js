var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('pic', 'assets/pics/barbarian-loading.png');
    this.load.image('block', 'assets/sprites/block.png');

}

function create() {

    var pic = this.add.image(0, 0, 'pic');
    var block = this.add.image(0, 0, 'block');

    //  Center the picture in the game
    Phaser.Utils.Align.InCenter(pic, { x: 0, y: 0, width: 800, height: 600, anchorX: 0, anchorY: 0 });

    //  Center the sprite to the picture
    Phaser.Utils.Align.InTopCenter(block, pic);

}
