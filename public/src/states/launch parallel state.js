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

            _this.state.launch('stateB');
            _this.state.launch('stateC');

        });
    }

});

var StateB = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateB ()
    {
        Phaser.State.call(this, { key: 'stateB' });

        this.pic;
    },

    preload: function ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    },

    create: function ()
    {
        this.pic = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);
    },

    update: function (time, delta)
    {
        this.pic.rotation += 0.01;
    }

});

var StateC = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateC ()
    {
        Phaser.State.call(this, { key: 'stateC' });

        this.pic;
    },

    preload: function ()
    {
        this.load.image('mech', 'assets/pics/titan-mech.png');
    },

    create: function ()
    {
        this.pic = this.add.image(Phaser.Math.Between(300, 600), 300, 'mech');
    },

    update: function (time, delta)
    {
        this.pic.rotation -= 0.02;
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
