class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create()
    {
        var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
        var image = this.add.image(100, 300, 'block');

        this.tweens.add({
            targets: image,
            x: 600,
            ease: 'Power1',
            duration: 3000,
            onComplete: this.onCompleteHandler,
            onCompleteParams: [image]
        });
    }

    //  The callback is always sent a reference to the Tween as the first argument and the targets as the second.
    //  Whatever you provided in the onCompleteParams array follows.
    onCompleteHandler(tween, targets, myImage)
    {
        console.log('onCompleteHandler');

        myImage.setScale(2);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);