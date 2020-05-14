var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', 'assets/pics/backscroll.png');
    this.load.image('block', 'assets/sprites/crate32.png');
}

function create() {
    this.physics.world.setBounds(0, 0, 1440, 176);
    this.cameras.main.setBounds(0, 0, 1440, 176);

    for (x = 0; x < 2; x++) {
        this.add.image(720 * x, 0, 'bg').setOrigin(0);
    }

    var player = this.physics.add.image(400, 100, 'block')
        .setBounce(1)
        .setCollideWorldBounds(true)
        .setVelocityX(150);

    this.cameras.main.startFollow(player, true);
    this.cameras.main.setZoom(2);
}
