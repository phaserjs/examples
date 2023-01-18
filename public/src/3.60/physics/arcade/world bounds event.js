class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.image('arrow', 'assets/sprites/arrow.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.physics.add.sprite(200, 150, 'arrow')
            .setVelocity(200, -200)
            .setCollideWorldBounds(true, 1, 1, true);

        this.physics.world.on('worldbounds', (body, up, down, left, right) =>
        {
            const { gameObject } = body;

            if (up) { gameObject.setAngle(90); }
            else if (down) { gameObject.setAngle(-90); }
            else if (left) { gameObject.setAngle(0); }
            else if (right) { gameObject.setAngle(180); }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
