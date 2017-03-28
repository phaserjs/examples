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
    Phaser.Utils.Align.InCenter(pic, this.add.zone(0, 0, 800, 600));

    //  Center the sprite to the picture
    Phaser.Utils.Align.InTopLeft(block, pic);

}
