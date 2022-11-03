class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space2.png');
        this.load.image('car', 'assets/sprites/car-yellow.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const car = this.add.image(0, 300, 'car')

        const tween = this.add.tween({
            targets: car,
            x: 800,
            duration: 4000,
            yoyo: true,
            ease: 'Linear',
            repeat: -1
        });

        // tween.seek(0.5);

        this.input.on('pointerdown', (pointer) => {

            // if (pointer.x > 400)
            // {
            //     tween.forward(500);
            // }
            // else
            // {
            //     tween.rewind(500);
            // }

            tween.seek(1000);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
