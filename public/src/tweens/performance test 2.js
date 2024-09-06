var x = 0;
var i = 0;
var blitter;
var text;

var scene = null;
var add = false;
var blitter;
var idx = 1;
var frame = 'veg01';
var numbers = [];

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
        this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    //  This test will create lots of single-fire tweens and not re-use them, to test Tween Manager GC

    create()
    {
        window.scene = this;

        blitter = this.add.blitter(0, 0, 'balls');

        text = this.add.text(10, 720);

        this.time.addEvent({ delay: 2, callback: this.launch, callbackScope: this, repeat: 100000 });
    }

    launch()
    {
        i++;

        var bob = blitter.create(x, 700, Phaser.Math.Between(0, 5));

        x += 0.5;

        if (x >= 1024)
        {
            x = 0;
        }

        if (Phaser.VERSION.substr(0, 4) === '3.60')
        {
            text.setText('Active Tweens: ' + this.tweens.tweens.length + '\nTotal Tweens created: ' + i);
        }
        else
        {
            text.setText('Active Tweens: ' + this.tweens.tweens.length + '\nTotal Tweens created: ' + i);
        }

        this.tweens.add({
            targets: bob,
            y: 10,
            duration: Phaser.Math.Between(500, 1000),
            ease: 'Power1',
            yoyo: true,
            onComplete: function ()
            {
                bob.destroy();
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