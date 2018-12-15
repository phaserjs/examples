class SceneA extends Phaser.Scene {

    constructor ()
    {
        super('a');
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient26.png');
        this.load.image('grid', 'assets/skies/grid.png');
    }

    create ()
    {
        console.log('A created');

        this.add.image(400, 300, 'bg');

        this.input.once('pointerdown', this.restart, this);

        this.input.keyboard.on('keydown_SPACE', this.check, this);
    }

    restart ()
    {
        this.scene.pause();
        this.scene.run('b');
    }

    check ()
    {
        console.log('Yo Yo Yo!');
    }

}

class SceneB extends Phaser.Scene {

    constructor ()
    {
        super('b');
    }

    create ()
    {
        console.log('B created');

        this.add.image(400, 300, 'grid');

        this.input.keyboard.once('keydown_SPACE', this.restart, this);
    }

    restart ()
    {
        console.log('r2');
        this.scene.stop();
        this.scene.resume('a');
    }

}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ SceneA, SceneB ]
};

var game = new Phaser.Game(config);
