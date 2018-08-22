class SceneA extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bunny');

        console.log("A create");
        this.input.once('pointerdown', () => {
            console.log("A pointerdown")
            this.scene.start('sceneB');
        });
    }

}


class SceneB extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('ayu', 'assets/pics/ayu.png');
    }

    create ()
    {
        this.add.image(400, 300, 'ayu');

        console.log("B create");
        this.input.once('pointerdown', () => {
            console.log("B pointerdown")
            this.scene.start('sceneA');
        });

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