class SceneA extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.face = this.add.image(400, 300, 'face');

        this.cameras.main.setName('A-BOB');

        this.input.once('pointerup', function () {

            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
      
      this.input.keyboard.once('keydown_T', function (event) {
            this.sys.game.destroy(true);
        }, this);
    }

}

class SceneB extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);

        this.cameras.main.setName('B-FOB');

        this.input.once('pointerup', function (event) {

            console.log('From SceneB to SceneA');

            this.scene.start('sceneA');

        }, this);

          this.input.keyboard.once('keydown_T', function (event) {
            this.sys.game.destroy(true);
        }, this);
    }

    update ()
    {
        this.arrow.rotation += 0.01;
    }

}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

var game = new Phaser.Game(config);
