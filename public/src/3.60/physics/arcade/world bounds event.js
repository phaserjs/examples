class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.spritesheet('gameboy', 'assets/sprites/gameboy_seize_color_40x60.png', { frameWidth: 40, frameHeight: 60 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.physics.add.image(400, 300, 'gameboy')
            .setVelocity(180, 120)
            .setCollideWorldBounds(true, 1, 1, true);

        this.physics.world.on('worldbounds', this.onWorldBounds);
    }

    onWorldBounds (body)
    {
        const ball = body.gameObject;

        ball.setFrame((ball.frame.name + 1) % 5);
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
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
