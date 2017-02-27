var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() 
{
    this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    this.load.xml('desyrel', 'assets/fonts/bitmap/desyrel.xml');
}

function create() 
{
    this.add.bitmapText(0, 0, 'Lorem ipsum\ndolor sit amet', 'atlas', 'desyrel');
}

function update()
{
}