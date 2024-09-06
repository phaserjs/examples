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
        var marker = this.add.image(100, 100, 'block').setAlpha(0.3);
        var image = this.add.image(100, 100, 'block').setAlpha(0);

        var tween = this.tweens.add({
            targets: image,
            x: 600,
            ease: 'Power1',
            duration: 3000,
            paused: true,
            onStart: this.onStartHandler,
            onStartParams: [image]
        });

        this.input.once('pointerdown', function ()
        {

            tween.play();

        });
    }

    //  The callback is always sent a reference to the Tween as the first argument and the targets as the second,
    //  then whatever you provided in the onStartParams array follows
    onStartHandler(tween, targets, gameObject)
    {
        console.log(arguments);

        gameObject.setAlpha(1);
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