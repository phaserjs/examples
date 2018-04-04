var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('gems', 'assets/animations/diamond.png', 'assets/animations/diamond.json');
}

function create ()
{
    this.anims.create({ key: 'diamond', frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }), repeat: -1 });

    var gem = this.add.sprite(400, 600, 'gems').play('diamond').setScale(4);

    for (var i = 0; i < gem.anims.currentAnim.frames.length; i++)
    {
        console.log(gem.anims.currentAnim.frames[i].index, gem.anims.currentAnim.frames[i].progress);
    }

    console.log(Phaser.Utils.Array.FindClosestInSorted(0.82, gem.anims.currentAnim.frames, 'progress'));

    // console.log(gem.anims.currentAnim.frames);
}
