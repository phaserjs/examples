var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'GameScene' });
    },

    preload: function ()
    {
        this.load.image('box', 'assets/sprites/128x128-v2.png');
    },

    create: function ()
    {
        this.input.setGlobalTopOnly(true);

        var box = this.add.image(400, 300, 'box');

        box.setInteractive();

        box.on('pointerdown', function () {

            box.tint = Math.random() * 0xffffff;

        });
    }

});

var UIScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function UIScene ()
    {
        Phaser.Scene.call(this, { key: 'UIScene', active: true });
    },

    preload: function ()
    {
        this.load.image('box2', 'assets/sprites/128x128.png');
    },

    create: function ()
    {
        var box = this.add.image(450, 350, 'box2');

        box.setInteractive();

        box.on('pointerdown', function () {

            box.tint = Math.random() * 0xffffff;

        });
    }

});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ GameScene, UIScene ]
};

var game = new Phaser.Game(config);
