class Example extends Phaser.Scene 
{
    constructor()
    {
        super();
    }

    preload()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('block', 'assets/sprites/block.png');
    }

    create()
    {
        var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
        var image = this.add.image(100, 300, 'block');

        var tween = this.tweens.add({
            targets: image,
            x: 700,
            delay: 1000,
            duration: 6000,
            ease: 'Power2'
        });

        this.input.on('pointerdown', function () 
        {

            tween.stop();

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
