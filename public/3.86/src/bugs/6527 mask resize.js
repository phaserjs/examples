
class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var layer = this.add.layer();
        for (var i = 0; i < 8; i++) {
            var gameObject = this.add.rectangle(0, 0, 1, 1, 0x888888)
                .setStrokeStyle(2, 0xFFFFFF)
                .setOrigin(0)
            layer.add(gameObject);
        }
        this.myLayer = layer;

        CreateCanvasTexture(this, 'mask');
        var maskImage = this.add.image(0, 0, 'mask').setOrigin(0);
        layer.setMask(maskImage.createBitmapMask());
    }

    update(time, delta) {
        ResizeGameObjects(this.myLayer.getAll());
    }
}

var CreateCanvasTexture = function (scene, key) {
    var texture = scene.textures.createCanvas('mask', 2048, 2048);
    var canvas = texture.getCanvas();
    var context = texture.getContext();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(255,0,0,0.2)';
    context.fill();
    texture.refresh();
}

var ResizeGameObjects = function (gameObjects) {
    var scene = gameObjects[0].scene;
    var { width, height } = scene.scale.displaySize;
    if ((scene.savedWidth === width) && (scene.savedHeight === height)) {
        return;
    }
    scene.savedWidth = width;
    scene.savedHeight = height;

    var cellWidth = width / gameObjects.length;
    gameObjects.forEach(function (gameObject, i) {
        gameObject.setSize(cellWidth - 2, cellWidth - 2)
        gameObject.setPosition(i * cellWidth, 0);
    })
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Demo]
};

var game = new Phaser.Game(config);
