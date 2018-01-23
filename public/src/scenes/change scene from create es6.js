class SceneA extends Phaser.Scene {

    constructor ()
    {
        super('boot');
    }

    preload ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.scene.start('preloader');
    }

}

class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('preloader');
    }

    create ()
    {
        this.face = this.add.image(400, 300, 'face');
        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);
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
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

var game = new Phaser.Game(config);
