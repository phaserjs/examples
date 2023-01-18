class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.spritesheet('gameboy', 'assets/sprites/gameboy_seize_color_40x60.png', { frameWidth: 40, frameHeight: 60 });
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const gameboy = this.physics.add.image(200, 300, 'gameboy')
            .setVelocity(200, 150)
            .setCollideWorldBounds(true, 1, 1, true);

        const fish = this.physics.add.image(600, 300, 'fish')
            .setVelocity(150, 200)
            .setCollideWorldBounds(true, 1, 1, true);

        gameboy.onWorldBounds = function ()
        {
            this.setFrame((this.frame.name + 1) % 5);
        };

        fish.onWorldBounds = function ()
        {
            this.setFrame((this.frame.name + 1) % 3);
        };

        this.physics.world.on('worldbounds', (body) =>
        {
            body.gameObject.onWorldBounds();
        });
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
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
