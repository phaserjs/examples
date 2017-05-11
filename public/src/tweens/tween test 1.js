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
    var image = this.add.image(100, 100, 'block');

    var tween = this.tweens.add({
        targets: image,
        props: {
            x: 600,
            y: 400
        },
        duration: 2,
        ease: 'Power1'
    });

    console.log(tween);
    // console.log(tween.targets);
    // console.log(tween.props);

}
