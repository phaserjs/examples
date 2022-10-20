var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        init: init,
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function init ()
{
    this.input.once('pointerdown', () => {

        console.log('restarting');

        this.scene.restart();

    });
}

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var image = this.add.image(100, 300, 'block');

    var tween = this.tweens.add({
        delay: 100,
        targets: image,
        x: 700
    });

    console.log(tween);
}
