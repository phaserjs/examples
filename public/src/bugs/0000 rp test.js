class Demo extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('truck', 'assets/sprites/astorm-truck.png');
    }

    create ()
    {
        this.input.on('pointerdown', () => {

            this.cameras.main.roundPixels = !this.cameras.main.roundPixels;

        });

        this.add.text(10, 10, 'Mobile Pipeline', { font: 'bold 32px Arial', fill: '#ffffff' });
        this.add.text(10.8, 50.3, 'Mobile Pipeline', { font: 'bold 32px Arial', fill: '#ffffff' });

        const a = this.add.sprite(0, 200, 'truck');

        this.tweens.add({
            targets: a,
            x: 800,
            duration: 5000,
            ease: 'linear',
            yoyo: true,
            repeat: -1
        });

        this.add.sprite(400, 300, 'truck');
        this.add.sprite(400.5, 400, 'truck');
        this.add.sprite(400.85, 500.2, 'truck');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    // pixelArt: true,
    backgroundColor: '#00007d',
    scene: Demo
};

const game = new Phaser.Game(config);
