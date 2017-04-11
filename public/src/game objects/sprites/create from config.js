var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('bunny', 'assets/sprites/bunny.png');
    this.load.image('atari', 'assets/sprites/atari400.png');
    this.load.image('logo', 'assets/sprites/phaser2.png');
}

function create ()
{
    var config1 = {
        key: 'bunny',
        x: 400,
        y: 300
    };

    var config2 = {
        key: 'bunny',
        x: 400,
        y: 300,
        flipX: true,
        flipY: true
    };

    var config3 = {
        key: [ 'bunny', 'atari', 'logo' ],
        x: 400,
        y: 300
    };

    var config4 = {
        key: 'atari',
        x: { randInt: [ 0, 800 ] },
        y: 300
    };

    var config5 = {
        key: 'logo',
        x: 400,
        y: 300,
        alpha: { randFloat: [ 0.1, 1 ] }
    };

    var config6 = {
        key: 'atari',
        x: 400,
        y: function () {
            return 100 + Math.random() * 500;
        }
    };

    var config7 = {
        key: 'logo',
        x: 400,
        y: 300,
        scale: { randFloat: [ 0.2, 2 ] }
    };

    var config8 = {
        key: 'logo',
        x: 400,
        y: 300,
        scale: { x: { randFloat: [ 0.2, 2 ] }, y: { randFloat: [ 1.5, 3 ] } }
    };

    this.make.sprite(config8);
}
