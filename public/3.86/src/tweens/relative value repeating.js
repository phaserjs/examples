class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create()
    {
        var image = this.add.image(400, 500, 'block');

        var tween = this.tweens.add({
            targets: image,
            y: '-=64',
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 6
        });

        console.log(tween);

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