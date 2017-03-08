var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        create: create,
        update: update
    },
    width: 800,
    height: 600
};

var graphics;
var game = new Phaser.Game(config);


function create() {
    graphics = this.add.graphics(400, 300);
    graphics.lineStyle(1, 0x00FF00, 1.0);
    graphics.fillStyle(0xFF0000, 1.0);
    graphics.fillTriangle(-100, -100, 100, -100, 0, 200);
    graphics.strokeTriangle(-100, 100, 100, 100, 0, -200);
}

function update() {
    graphics.rotation += 0.01;
}
