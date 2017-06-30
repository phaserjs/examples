var StateA = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateA ()
    {
        Phaser.State.call(this, { key: 'stateA' });
    },

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.add.image(400, 300, 'face').setAlpha(0.2);

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            console.log('From StateA to StateB');

            _this.state.start('stateB');

        });
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
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    },

    create: function ()
    {
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            console.log('From StateB to StateC');

            _this.state.start('stateC');

        });
    },

    update: function (time, delta)
    {
        this.arrow.rotation += 0.01;
    }

});

var StateC = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateC ()
    {
        Phaser.State.call(this, { key: 'stateC' });
    },

    preload: function ()
    {
        this.load.image('mech', 'assets/pics/titan-mech.png');
    },

    create: function ()
    {
        this.add.image(Phaser.Math.Between(0, 800), 300, 'mech');

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            console.log('From StateC to StateA');

            _this.state.start('stateA');

        });
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: [ StateA, StateB, StateC ]
};

var game = new Phaser.Game(config);
