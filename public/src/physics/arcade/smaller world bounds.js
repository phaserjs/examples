var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 300 },
            // Can set bounds here as well:
            // x: 255,
            // y: 185,
            // width: 290,
            // height: 210
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    this.load.image('monitor', 'assets/demoscene/monitor.png');
}

function create() {
    this.add.image(400, 300, 'monitor');

    this.physics.world.setBounds(255, 185, 290, 210);

    var balls = this.physics.add.group({
        key: 'ball',
        frame: [0, 1, 2, 3, 4],
        frameQuantity: 5,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        velocityX: 150,
        velocityY: 150
    });

    Phaser.Actions.RandomRectangle(balls.getChildren(), this.physics.world.bounds);
}

