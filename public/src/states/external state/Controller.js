var Controller = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function Controller ()
    {
        Phaser.State.call(this, { key: 'controller' });
    },

    preload: function ()
    {
        this.load.script('demo', 'src/states/external state/Demo.js');
    },

    create: function ()
    {
        var clone = 0;

        this.time.addEvent({ delay: 2000, callback: function () {

            this.state.add('demo' + clone, Demo, true);
            clone++;

        }, callbackScope: this, repeat: 2 });
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: [ Controller ]
};

var game = new Phaser.Game(config);
