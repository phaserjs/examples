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
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
    var image = this.add.image(100, 300, 'block');

    var tween = this.tweens.add({
        targets: image,
        x: 700,
        duration: 6000,
        ease: 'Power2'
    });

    tween.pause();

    this.input.once('pointerdown', () => {

        tween.resume();

    });
}
