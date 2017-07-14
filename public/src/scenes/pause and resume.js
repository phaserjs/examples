var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'sceneA' });

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

            _this.scene.pause();
            _this.scene.launch('sceneB');

        });
    },

    update: function (time, delta)
    {
        this.pic.rotation += 0.01;
    }

});

var SceneB = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneB ()
    {
        Phaser.Scene.call(this, { key: 'sceneB' });
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

            _this.scene.resume('sceneA');

        });
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

var game = new Phaser.Game(config);
