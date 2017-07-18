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

    this.input.setOnOverCallback(sprite, onOver, this);
    this.input.setOnOutCallback(sprite, onOut, this);
}

function onOver (gameObject, pointer, x, y)
{
    gameObject.setAngle(10);
    gameObject.setScale(1.25);
}

function onOut (gameObject, pointer, x, y)
{
    gameObject.setAngle(0);
    gameObject.setScale(1);
}
