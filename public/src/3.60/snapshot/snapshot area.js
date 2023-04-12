class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('pic', 'assets/pics/brilliance-jim-sachs.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/sprites/128x128.png');
        this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', { frameWidth: 37, frameHeight: 45, endFrame: 17 });

    }

    create ()
    {
        const g = this.add.graphics().setDepth(1);
        this.input.on('pointermove', (pointer) => {
            g.clear();
            g.lineStyle(2, 0xffffff);
            g.strokeRect(pointer.x - 2, pointer.y - 2, 132, 132);

        });

        this.input.on('pointerdown', (pointer) => {

            const textureManager = this.textures;

            this.game.renderer.snapshotArea(pointer.x, pointer.y, 128, 128, (image) =>
            {
                document.body.appendChild(image);

                if (textureManager.exists('area'))
                {
                    textureManager.remove('area');
                }

                textureManager.addImage('area', image);

                // particles.setTexture('area');
            });

        });

        //  Everything from here down is just stuff to display, so you can grab from it
        const bg = this.add.image(400, 455, 'pic').setScale(1.1);

        this.textures.get('mummy').setFilter(1);

        this.tweens.add({
            targets: bg,
            y: 100,
            duration: 5000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            yoyo: true
        });

        this.anims.create({
            key: 'run',
            frames: 'mummy',
            frameRate: 20,
            repeat: -1
        });

        const container = this.add.container(-100, 0);

        container.setScale(2);

        const sprites = [];

        let x = 0;
        let y = 50;

        for (let i = 1; i <= 18; i++)
        {
            const sprite = this.add.sprite(x, y, 'mummy').play('run');

           y  += 100;

            sprites.push(sprite);

            if (i % 3 === 0)
            {
                x -= 100;
                y = 50;
            }
        }

        container.add(sprites);

        this.tweens.add({
            targets: container,
            x: 1800,
            duration: 20000,
            repeat: -1
        });

        const particles = this.add.particles(0, 0, 'red', {
            lifespan: 2000,
            speed: { min: 100, max: 200 },
            scale: { start: 1, end: 0 },
            quantity: 2,
            frequency: 500
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setSize(128, 90);
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
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
