var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('buttonBG', 'assets/sprites/button-bg.png');
    this.load.image('buttonText', 'assets/sprites/button-text.png');
}

function create ()
{
    var bg = this.add.image(0, 0, 'buttonBG');
    var text = this.add.image(0, 0, 'buttonText');

    bg.setInteractive();

    var container = this.add.container(400, 300, [ bg, text ]);

    bg.on('pointerdown', function () {

        console.log('Clicked button');

    });

    bg.on('pointerover', function () {

        this.setTint(0xff44ff);

    });

    bg.on('pointerout', function () {

        this.clearTint();

    });
}
