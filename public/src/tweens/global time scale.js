class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/ui/undersea-bg.png');
        this.load.image('up', 'assets/ui/up-bubble.png');
        this.load.image('down', 'assets/ui/down-bubble.png');
        this.load.spritesheet('fish', 'assets/sprites/fish-136x80.png', { frameWidth: 136, frameHeight: 80 });
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const image1 = this.add.image(0, 80, 'fish', 0);

        this.tweens.add({
            targets: image1,
            props: {
                x: { value: 700, duration: 4000, flipX: true },
                y: { value: 500, duration: 8000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        const image2 = this.add.image(400, 80, 'fish', 1);

        this.tweens.add({
            targets: image2,
            props: {
                x: { value: 500, duration: 2000, flipX: true },
                y: { value: 500, duration: 10000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        const image3 = this.add.image(800, 200, 'fish', 2).setFlipX(true);

        this.tweens.add({
            targets: image3,
            props: {
                x: { value: 70, flipX: true },
                y: { value: 250 },
            },
            duration: 3000,
            ease: 'Power1',
            yoyo: true,
            repeat: -1
        });

        const image4 = this.add.image(100, 550, 'fish', 2).setScale(0.75);

        this.tweens.add({
            targets: image4,
            props: {
                x: { value: 700, duration: 2000, flipX: true },
                y: { value: 50, duration: 15000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });

        //  Buttons to control the Tween timescale

        const text = this.add.text(180, 0, 'Global timeScale: 1').setFont('32px Arial Black').setFill('#ffffff').setShadow(2, 2, "#333333", 2);

        const downButton = this.add.image(70, 530, 'down').setInteractive();

        downButton.on('pointerdown', () => {

            if (this.tweens.timeScale > 0)
            {
                this.tweens.timeScale -= 0.1;
            }

            text.setText('Global timeScale: ' + this.tweens.timeScale.toFixed(2));

        });

        const upButton = this.add.image(730, 530, 'up').setInteractive();

        upButton.on('pointerdown', () => {

            if (this.tweens.timeScale < 9.9)
            {
                this.tweens.timeScale += 0.1;
            }

            text.setText('Global timeScale: ' + this.tweens.timeScale.toFixed(2));

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
