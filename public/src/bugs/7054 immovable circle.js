class MainScene extends Phaser.Scene
{

    constructor()
    {
        super({ key: "MainScene" });
    }

    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        const mushroom = this.physics.add.image(200, 350, 'mushroom')
            .setCircle(30)
            .setImmovable(true);

        const block = this.physics.add.image(500, 300, 'block')
            .setVelocity(-100, 0)
            .setBounce(1)
            .setCollideWorldBounds(true);

        this.physics.add.collider(mushroom, block);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ MainScene ]
};

const game = new Phaser.Game(config);