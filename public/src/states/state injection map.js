var MyState = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function MyState ()
    {
        //  Here we'll tailor the property injection map so that by default our State
        //  only gets 2 properties defined on it: 'makeStuff' and 'loader'.
        //  It will also have the property 'sys' which can never be redefined or removed.
        var config = {
            map: {
                add: 'makeStuff',
                load: 'loader'
            }
        };

        Phaser.State.call(this, config)
    },

    preload: function ()
    {
        this.loader.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.makeStuff.image(400, 300, 'face');

        console.log(this);
    }

});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: MyState
};

var game = new Phaser.Game(config);
