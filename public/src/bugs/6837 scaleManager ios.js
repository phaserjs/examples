class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
    }

    create ()
    {
        var print = this.add.text(0, 0, '');

        this.scale.on('orientationchange', function (orientation)
        {
            var s = [ orientation ];
            if (orientation === Phaser.Scale.PORTRAIT)
            {
                s.push('PORTRAIT PRIMARY')
            }
            else if (orientation === Phaser.Scale.PORTRAIT_SECONDARY)
            {
                s.push('PORTRAIT SECONDARY')
            }
            else if (orientation === Phaser.Scale.LANDSCAPE)
            {
                s.push('LANDSCAPE PRIMARY')
            }
            else if (orientation === Phaser.Scale.LANDSCAPE_SECONDARY)
            {
                s.push('LANDSCAPE SECONDARY')
            } else
            {
                s.push('??')
            }

            print.text = s.join('\n')
        });

        print.text = this.scale.orientation;
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
