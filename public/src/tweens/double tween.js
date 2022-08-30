class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        var image = this.add.image(100, 300, 'block');

        this.tweens.add({
            targets: image,
            x: 700,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 1000,
            repeat: -1
        });

        this.tweens.add({
            targets: image,
            y: 50,
            yoyo: true,
            ease: 'Sine.out',
            duration: 500,
            repeat: -1,
            repeatDelay: 1000
        });

        this.tweens.add({
            targets: image,
            y: 550,
            yoyo: true,
            ease: 'Sine.out',
            duration: 500,
            repeat: -1,
            delay: 500,
            repeatDelay: 1000
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
