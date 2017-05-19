var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
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
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block');

    //  Creates a chained tween.

    var tween = this.tweens.add({
        targets: image,
        x: [ '+=200', { value: '+=200', delay: 1000, duration: 500 }, { value: '-=400', delay: 500, duration: 3500, ease: 'Power4' } ],
    });

    console.log(tween);

}
