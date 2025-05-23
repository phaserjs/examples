class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create() {
        var rt = this.add.renderTexture(400, 300, 64, 64);
        rt
            .resize(128, 128)
            .drawFrame('mushroom', undefined, 0, 0)
            .drawFrame('mushroom', undefined, 0, 64)
            .drawFrame('mushroom', undefined, 64, 0)
            .drawFrame('mushroom', undefined, 64, 64)
    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-example',
        width: 800,
        height: 600,
    },
    scene: Demo
};

var game = new Phaser.Game(config);
