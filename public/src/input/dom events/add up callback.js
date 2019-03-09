var config = {
    type: Phaser.AUTO,
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
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    sprite.on('pointerdown', function (pointer) {

        console.log('down');
        this.setTint(0xff0000);

    });

    sprite.on('pointerover', function (pointer) {

        console.log('over');

    });

    sprite.on('pointerout', function (pointer) {

        console.log('out');
        this.clearTint();

    });

    sprite.on('pointerup', function (pointer) {

        console.log('up');
        this.clearTint();

    });

    this.input.on('pointerdown', function (pointer) {

        console.log('g down');

    });

    this.input.on('pointerup', function (pointer) {

        console.log('g up');

    });

    this.input.on('pointerdownoutside', function (pointer) {

        console.log('g down outside');

    });

    this.input.on('pointerupoutside', function (pointer) {

        console.log('g up outside');

    });

}
