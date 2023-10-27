class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/clouds.png');
        this.load.image('ground', 'assets/skies/sf2floor.png');
        this.load.image('master', 'assets/sprites/master.png');
        this.load.spritesheet('coin', 'assets/sprites/coin.png', { frameWidth: 32, frameHeight: 32 });
    }

    create ()
    {
        this.add.image(400, 400, 'bg');
        this.add.image(400, 600, 'ground');

        const master = this.physics.add.image(400, 300, 'master');

        master.setDirectControl();
        master.setImmovable();

        this.input.on('pointermove', pointer => {

            master.setPosition(pointer.worldX, pointer.worldY);

        });

        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('coin', { frames: [ 0, 1, 2, 3, 4, 5 ] }),
            frameRate: 16,
            repeat: -1
        });

        const coins = [];

        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(-1500, 0);

            const coin = this.physics.add.sprite(x, y, 'coin').playAfterDelay('spin', Math.random() * 1000);

            coin.setBounce(1);
            coin.setDrag(5);
            coin.setVelocityX(Phaser.Math.Between(-80, 80));
            coin.setVelocityY(Phaser.Math.Between(10, 50));
            coin.setMaxVelocity(500, 500);
            coin.setCollideWorldBounds(true);

            coins.push(coin);
        }

        this.physics.world.setBounds(0, -1500, 800, 2080);

        this.physics.add.collider(master, coins);
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
            gravity: { y: 50 },
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
