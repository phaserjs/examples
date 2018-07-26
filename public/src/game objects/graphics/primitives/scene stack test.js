class SceneA extends Phaser.Scene {

    constructor (config)
    {
        super({ key: 'SceneA', active: true });
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('metal', 'assets/textures/alien-metal.jpg');
    }

    create ()
    {
        this.cameras.main.setBackgroundColor(0xff0000);
        // this.cameras.main.setViewport(100, 100, 600, 400);

        this.add.image(200, 200, 'bunny');

        var graphics = this.add.graphics();

        graphics.fillStyle(0xffffff, 1);
        graphics.fillTriangle(200, 200, 400, 50, 500, 300);

        graphics.fillStyle(0x00ffff, 1);
        graphics.fillTriangle(60, 500, 60, 400, 500, 500);
    }

}

class SceneB extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'SceneB', active: true });
    }

    create ()
    {
        // this.cameras.main.setViewport(100, 100, 600, 400);

        var graphics = this.add.graphics();

        graphics.fillStyle(0x00ff00, 1);

        graphics.beginPath();

        graphics.moveTo(400, 100);
        graphics.lineTo(200, 278);
        graphics.lineTo(340, 430);
        graphics.lineTo(650, 300);
        graphics.lineTo(700, 180);
        graphics.lineTo(600, 80);

        graphics.closePath();
        graphics.fillPath();
    }

}

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

var game = new Phaser.Game(config);
