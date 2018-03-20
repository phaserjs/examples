var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
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
    this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
}

function create ()
{
    window.scene = this;

    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    //  Events

    this.input.on('pointerover', function (event, objects) {

        objects[0].setTint(0xff0000);

    });

    this.input.on('pointerout', function (event, objects) {

        objects[0].clearTint();

    });
}
