class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/demoscene/ball-tlb.png');
    }

    create ()
    {
        const group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 28,
            gridAlign: {
                x: 14,
                y: 14,
                width: 28,
                height: 1,
                cellWidth: 28
            },
            bounceY: 1,
            collideWorldBounds: true
        });

        group.setVelocityY(300, 10);
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
            gravity: { y: 100 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
