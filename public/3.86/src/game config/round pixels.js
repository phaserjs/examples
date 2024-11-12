class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('pic', 'assets/pics/atari-fujilogo.png');
        this.load.image('sprite', 'assets/sprites/mushroom16x16.png');
        this.load.image('bik', 'assets/sprites/bikkuriman.png');
    }

    create ()
    {
        const a = this.add.image(400, 150, 'bik');

        const b = this.add.image(400, 300, 'pic');

        const c = this.add.image(100, 300, 'sprite').setScale(10);

        const d = this.add.image(700, 300, 'sprite').setScale(10);

        let aligned = true;

        const left = this.add.text(10, 10, 'Left 0.5px', { font: '16px Courier' });
        const right = this.add.text(680, 10, 'Right 0.5px', { font: '16px Courier' });

        left.setInteractive();
        right.setInteractive();

        left.on('pointerdown', () => {

            this.cameras.main.zoom += 1;

            console.log(this.cameras.main.zoom);

            // this.cameras.main.scrollX += 0.5;
            // console.log(this.cameras.main.scrollX);

        });

        right.on('pointerdown', () => {

            this.cameras.main.zoom -= 0.5;

            console.log(this.cameras.main.zoom);

            // this.cameras.main.scrollX -= 0.5;
            // console.log(this.cameras.main.scrollX);

        });

        this.input.on('pointerdown', (pointer) => {

            if (pointer.y < 200)
            {
                return;
            }

            aligned = !aligned;

            a.x += (aligned) ? 0.5 : -0.5;
            b.x += (aligned) ? 0.5 : -0.5;
            c.x += (aligned) ? 0.5 : -0.5;
            d.x += (aligned) ? 0.5 : -0.5;

            a.y += (aligned) ? 0.25 : -0.25;
            b.y += (aligned) ? 0.25 : -0.25;
            c.y += (aligned) ? 0.25 : -0.25;
            d.y += (aligned) ? 0.25 : -0.25;

        });

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    roundPixels: true,
    pixelArt: true,
    backgroundColor: '#000099',
    scene: Example
};

const game = new Phaser.Game(config);
