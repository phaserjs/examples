var MyState = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function MyState (config)
    {
        Phaser.State.call(this, config)
    },

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.face = this.add.image(400, 300, 'face');
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    state: MyState
};

var game = new Phaser.Game(config);
