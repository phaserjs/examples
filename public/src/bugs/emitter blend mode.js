var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image0', 'assets/pics/ra-einstein.png');
}

function create ()
{
    var ts = this.add.tileSprite(0, 0, 800, 600, 'image0').setOrigin(0);

    console.log(ts.width, ts.height, ts.displayWidth, ts.displayHeight);
    console.log(ts.getBounds());    
}
