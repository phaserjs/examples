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

var cam;
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
    card1 = this.add.image(200, 100, 'cards', 'heartsAce');
    card2 = this.add.image(400, 100, 'cards', 'hearts2');
    card3 = this.add.image(600, 100, 'cards', 'hearts3');

    card1.setScrollFactor(1);
    card2.setScrollFactor(0.6);
    card3.setScrollFactor(0.3);

    cam = this.cameras.main;

    // cam.centerToSize();
}

function update ()
{
    cam.scrollX += 1;
    // cam.scrollY -= 0.5;

    card1.y += 0.5;
    card2.y += 0.5;
    card3.y += 0.5;
}
