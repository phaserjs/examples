var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var card1;
var card2;
var card3;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
}

function create ()
{
    //  Create a stack of random cards

    var frames = this.textures.get('cards').getFrameNames();

    card1 = this.add.image(200, 100, 'cards', Phaser.Math.RND.pick(frames));
    card2 = this.add.image(400, 100, 'cards', Phaser.Math.RND.pick(frames));
    card3 = this.add.image(600, 100, 'cards', Phaser.Math.RND.pick(frames));

    card1.setScrollFactor(1);
    card2.setScrollFactor(0.5);
    card3.setScrollFactor(0.25);

    //  Toggle these two lines - why does the centerToSize() have an impact on the scrollFactor working???
    // var cam1 = this.cameras.main.setSize(512, 300).setZoom(0.5);
    var cam1 = this.cameras.main.setSize(512, 300).setZoom(0.5).centerToSize();
}

function update ()
{
    card1.y += 0.5;
    card2.y += 0.5;
    card3.y += 0.5;
}
