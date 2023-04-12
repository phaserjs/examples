class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', { frameWidth: 37, frameHeight: 45, endFrame: 17 });
    }

    create ()
    {
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
            const sprite = this.add.sprite(x, y, 'mummy').play('run').setInteractive();

            y += 100;

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

        this.input.on('gameobjectup', (pointer, gameObject) =>
        {

            gameObject.setTint(Math.random() * 0xffffff);

        });

        this.add.text(10, 10, 'Click sprites to interact', { font: '16px Courier', fill: '#00ff00' });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
