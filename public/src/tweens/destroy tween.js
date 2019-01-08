var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var image = this.add.image(100, 100, 'block');

    var tween = this.tweens.add({
        targets: image,
        x: 600,
        yoyo: true,
        repeat: -1
    });

    this.input.once('pointerdown', function () {

        tween.stop();

    }, this);
}
