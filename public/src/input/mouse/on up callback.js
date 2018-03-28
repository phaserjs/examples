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
    var sprite = this.add.sprite(400, 300, 'eye').setInteractive();

    this.input.on('gameobjectup', onUp);
}

function onUp (pointer, object)
{
    object.x = Phaser.Math.Between(0, 800);
    object.y = Phaser.Math.Between(0, 600);
}
