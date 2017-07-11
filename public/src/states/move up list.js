var DemoA = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function DemoA ()
    {
        Phaser.State.call(this, { key: 'demoA', active: true });
    },

    preload: function ()
    {
        this.load.image('picA', 'assets/pics/lance-overdose-loader-eye.png');
    },

    create: function ()
    {
        this.add.image(400, 300, 'picA');

        var _this = this;

        this.input.events.on('MOUSE_DOWN_EVENT', function (event) {

            _this.state.moveUp();

        });
    }

});

var DemoB = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function DemoB ()
    {
        Phaser.State.call(this, { key: 'demoB', active: true });
    },

    preload: function ()
    {
        this.load.image('picB', 'assets/pics/sukasuka-chtholly.png');
    },

    create: function ()
    {
        this.add.image(400, 500, 'picB');
    }

});

var DemoC = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function DemoC ()
    {
        Phaser.State.call(this, { key: 'demoC', active: true });
    },

    preload: function ()
    {
        this.load.image('picC', 'assets/pics/titan-mech.png');
    },

    create: function ()
    {
        this.add.image(300, 300, 'picC');
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: [ DemoA, DemoB, DemoC ]
};

var game = new Phaser.Game(config);
