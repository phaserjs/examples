class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var gameObject0 = CreateGameObject(this, 200, 300)

        var gameObject1 = CreateGameObject(this, 400, 300)
        gameObject1.preFX.addPixelate(10);
        gameObject1.preFX.clear();

        var gameObject2 = CreateGameObject(this, 600, 300)
        gameObject2.postFX.addPixelate(10);
        gameObject2.postFX.clear();

    }
}

var CreateGameObject = function (scene, x, y) {
    return scene.add.text(x, y, 'Phaser3\nPhaser3\nPhaser3\nPhaser3', {
        fontSize: 25,
    })
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [Demo]
};

var game = new Phaser.Game(config);
