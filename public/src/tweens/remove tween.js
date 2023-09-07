class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/tweens/grass.png');
        this.load.image('van', 'assets/tweens/icecreamvan.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const van = this.add.image(100, 100, 'van');

        const tween = this.tweens.add({
            targets: van,
            x: 700,
            y: 500,
            duration: 2000,
            loop: 4
        });

        this.input.on('pointerdown', () => {
            tween.remove();
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
