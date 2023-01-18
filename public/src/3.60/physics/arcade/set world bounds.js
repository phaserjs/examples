class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.image('cockpit', 'assets/pics/cockpit.png');
        this.load.spritesheet('ball', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
    }

    create ()
    {
        this.add.image(320, 200, 'bg');
        this.add.image(320, 200, 'cockpit').setScale(2);

        this.physics.world.setBounds(32, 20, 576, 240);

        const group = this.physics.add.group({
            key: 'ball',
            frameQuantity: 48,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 200,
            velocityY: 150
        });

        Phaser.Actions.RandomRectangle(group.getChildren(), this.physics.world.bounds);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 400,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            // You can also set the world bounds here:
            // x: 32, y: 20, width: 576, height: 240,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
