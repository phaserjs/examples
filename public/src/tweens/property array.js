var config = {
    type: Phaser.WEBGL,
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
    var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
    var image = this.add.image(100, 100, 'block');

    //  Creates a chained tween.
    //  Sprite advances to x300, x350, x600 and x700 at 1000ms per ease

    var tween = this.tweens.add({
        targets: image,
        x: [ 300, 350, 600, 700 ],
        ease: 'Power1',
        duration: 1000
    });

    console.log(tween);

}
