var text;
var tween;

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
        var image = this.add.image(100, 100, 'block');

        //  Creates a chained tween.

        var tween = this.tweens.add({
            targets: image,
            x: '+=600',
            ease: 'Power2',
            paused: true
        });

        this.input.once('pointerdown', function ()
        {

            tween.play();

        });

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