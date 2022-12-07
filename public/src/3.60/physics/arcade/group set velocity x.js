class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/demoscene/doc-ball.png');
    }

    create ()
    {
        const group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 12,
            gridAlign: {
                x: 25,
                y: 25,
                width: 1,
                height: 12,
                cellWidth: 50,
                cellHeight: 50
            },
            bounceX: 1,
            collideWorldBounds: true
        });

        group.setVelocityX(200, 10);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
