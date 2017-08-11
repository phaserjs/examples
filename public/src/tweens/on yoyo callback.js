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
    this.load.image('arrow', 'assets/sprites/arrow.png');
}

function create ()
{
    var marker = this.add.image(100, 100, 'arrow').setAlpha(0.3);
    var image = this.add.image(100, 100, 'arrow');

    var tween = this.tweens.add({
        targets: image,
        x: 600,
        ease: 'Power1',
        duration: 3000,
        yoyo: true,
        repeat: -1,
        onYoyo: onYoyoHandler,
        onRepeat: onYoyoHandler
    });
}

//  The callback is always sent a reference to the Tween as the first argument,
//  then whatever you provided in the onStartParams array as the rest
function onYoyoHandler (gameObject, tween)
{
    gameObject.toggleFlipX();
}
