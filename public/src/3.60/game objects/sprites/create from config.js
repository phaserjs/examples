class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('atari', 'assets/sprites/atari400.png');
        this.load.image('logo', 'assets/sprites/phaser2.png');
    }

    create ()
    {
        //  Implicit values
        const config1 = {
            key: 'bunny',
            x: 400,
            y: 300
        };

        //  Implicit values
        const config2 = {
            key: 'bunny',
            x: 400,
            y: 300,
            flipX: true,
            flipY: true
        };

        //  An array means 'pick one element at random'
        const config3 = {
            key: [ 'bunny', 'atari', 'logo' ],
            x: 400,
            y: 300
        };

        //  randInt means pick a random integer between the min and max values given
        const config4 = {
            key: 'atari',
            x: { randInt: [ 0, 800 ] },
            y: 300
        };

        //  randFloat means pick a random float between the min and max values given
        const config5 = {
            key: 'logo',
            x: 400,
            y: 300,
            alpha: { randFloat: [ 0.1, 1 ] }
        };

        //  If the property is a function it will invoke it and use the result as the value
        const config6 = {
            key: 'atari',
            x: 400,
            y: function ()
            {
                return 100 + Math.random() * 500;
            }
        };

        //  An example using randFloat to set the scale of a Sprite
        const config7 = {
            key: 'logo',
            x: 400,
            y: 300,
            scale: { randFloat: [ 0.2, 2 ] }
        };

        //  An example using randFloat to set independent x and y scale values
        const config8 = {
            key: 'logo',
            x: 400,
            y: 300,
            scale: { x: { randFloat: [ 0.2, 2 ] }, y: { randFloat: [ 1.5, 3 ] } }
        };

        this.make.sprite(config8);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
