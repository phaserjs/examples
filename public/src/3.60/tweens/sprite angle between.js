class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bg', 'assets/skies/darkstone.png');
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const sprite = this.add.sprite(400, 400, 'arrow').setOrigin(0, 0.5);

        this.tweens.add({
            targets: sprite,
            angle: { from: -60, to: -120 },
            duration: 1000,
            yoyo: true,
            repeat: -1
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
