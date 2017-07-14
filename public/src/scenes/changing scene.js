var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'sceneA' });
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

            console.log('From SceneA to SceneB');

            _this.scene.start('sceneB');

        });
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
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    },

    create: function ()
    {
        this.arrow = this.add.image(400, 300, 'arrow').setOrigin(0, 0.5);

        var _this = this;

        this.input.events.once('MOUSE_DOWN_EVENT', function (event) {

            console.log('From SceneB to SceneC');

            _this.scene.start('sceneC');

        });
    },

    update: function (time, delta)
    {
        this.arrow.rotation += 0.01;
    }

});

var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
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

            console.log('From SceneC to SceneA');

            _this.scene.start('sceneA');

        });
    }

});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC ]
};

var game = new Phaser.Game(config);
