var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('donuts', 'assets/pics/donuts.jpg');
    this.load.image('fork', 'assets/sprites/fork.png');
}

function create ()
{
    //  Mmm, donuts
    this.add.image(0, 0, 'donuts').setOrigin(0);

    //  A little fork sprite
    var fork = this.add.image(1024, 600, 'fork').setOrigin(0.5, 0).setAngle(-20);

    var label = this.add.text(0, 0, '', { font: "48px Arial Black", fill: "#c51b7d" });
    label.setStroke('#de77ae', 8);

    //  And here's the real content.. some hit zones.
    //  One for each donut in the picture.
    
    this.add.zone(0, 0, 345, 300).setName('Plain').setInteractive();
    this.add.zone(345, 0, 310, 300).setName('Chocolate').setInteractive();
    this.add.zone(655, 0, 369, 300).setName('Coffee\nand cream').setInteractive();

    this.add.zone(0, 300, 330, 300).setName('Chocolate\nSprinkles').setInteractive();
    this.add.zone(330, 300, 350, 300).setName('Strawberry').setInteractive();
    this.add.zone(680, 300, 344, 300).setName('More\nSprinkles').setInteractive();

    //  And some events

    this.input.on('gameobjectdown', function (pointer, gameObject) {

        fork.x = pointer.x;
        fork.y = pointer.y;

        label.setText(gameObject.name);
        label.x = gameObject.x;
        label.y = gameObject.y;

    });
}
