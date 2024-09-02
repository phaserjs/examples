class Example extends Phaser.Scene
{
    preload ()
    {
        for (let i = 1; i <= 32; i++)
        {
            this.load.image(`pixel${i}`, `assets/tests/pixels/${i}.png`);
        }
    }

    create ()
    {
        let y = 0;
        let total = 0;

        this.input.on('pointerdown', (pointer) => {

            if (pointer.worldY >= 500)
            {
                console.log('Capture');

                this.game.renderer.captureFrame(false, true);
            }
            else
            {
                this.addSprites(y);
                y++;
                total += 1024;

                this.addSprites(y);
                y++;
                total += 1024;

                this.addSprites(y);
                y++;
                total += 1024;

                this.addSprites(y);
                y++;
                total += 1024;

                console.log('Total sprites:', total);
            }

        });
    }

    addSprites (y)
    {
        let color = 1;

        for (let x = 0; x < 1024; x++)
        {
            this.add.image(x, y, `pixel${color}`).setOrigin(0);

            // color++;

            if (color === 15)
            {
                color = 1;
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 512,
    scene: Example
};

const game = new Phaser.Game(config);
