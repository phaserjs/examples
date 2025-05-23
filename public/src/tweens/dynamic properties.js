class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('ball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        var image = this.add.image(100, 300, 'ball');

        var destX = 700;

        var tween = this.tweens.add({
            targets: image,
            duration: 500,
            yoyo: true,
            repeat: 8,
            ease: 'Sine.easeInOut',

            x: {

                getEnd: function (target, key, value)
                {
                    destX -= 30;

                    return destX;
                },

                getStart: function (target, key, value)
                {
                    return value + 30;
                }

            }

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