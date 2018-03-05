var SceneA = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneA ()
    {
        Phaser.Scene.call(this, { key: 'sceneA' });
    },

    preload: function ()
    {
        this.load.image('wizball', 'assets/sprites/wizball.png');
    },

    create: function ()
    {
        console.log('SceneA');

        var ball = this.add.image(400, 300, 'wizball');

        this.input.once('pointerdown', function () {

            ball.setScale(4);

            this.scene.start('sceneB');

        }, this);
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
        this.load.audio('theme', [
            'assets/audio/oedipus_wizball_highscore.ogg',
            'assets/audio/oedipus_wizball_highscore.mp3'
        ]);
    },

    create: function ()
    {
        console.log('SceneB');

        this.scene.start('sceneC');
    }

});

var SceneC = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SceneC ()
    {
        Phaser.Scene.call(this, { key: 'sceneC' });
    },

    create: function ()
    {
        console.log('SceneC');

        this.add.image(400, 300, 'wizball').setScale(4);

        var music = this.sound.add('theme');

        music.play();
    }

});

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: [ SceneA, SceneB, SceneC ]
};

var game = new Phaser.Game(config);
