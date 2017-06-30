var StateA = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateA ()
    {
        Phaser.State.call(this, { key: 'stateA' });

        this.pic;
    },

    preload: function ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    },

    create: function ()
    {
        this.pic = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            _this.state.pause();
            _this.state.launch('stateB');

        });
    },

    update: function (time, delta)
    {
        this.pic.rotation += 0.01;
    }

});

var StateB = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateB ()
    {
        Phaser.State.call(this, { key: 'stateB' });
    },

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.add.image(400, 300, 'face').setAlpha(0.5);

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            _this.state.resume('stateA');

        });
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: [ StateA, StateB ]
};

var game = new Phaser.Game(config);
