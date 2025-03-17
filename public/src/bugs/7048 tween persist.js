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
        var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
        var image = this.add.image(100, 300, 'block');

        var tween = this.tweens.chain({
            // paused: true,
            persist: true,
            tweens: [{
                targets: image,
                x: 700,
                delay: 1000,
                duration: 6000,
                ease: 'Power2'
            }]
        });

        var toggle = false;
        this.input.on('pointerdown', function () 
        {
            if (toggle) {
                tween.stop();
            } else {
                tween.play();
            }
            toggle = !toggle;
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