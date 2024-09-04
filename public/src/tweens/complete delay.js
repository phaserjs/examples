class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create ()
    {
        this.marker = this.add.image(100, 300, 'block').setAlpha(0.3);
        this.image = this.add.image(100, 300, 'block');

        this.moveBlock();
    }

    resetBlock()
    {
        this.tweens.add({
            targets: this.image,
            x: 100,
            duration: 1000,
            ease: 'Power2',
            completeDelay: 2000,
            onComplete: function () {
                this.moveBlock();
            }.bind(this),
        });
    }

    moveBlock()
    {
        this.tweens.add({
            targets: this.image,
            x: 700,
            duration: 1000,
            ease: 'Power2',
            completeDelay: 2000,
            onComplete: function () {
                this.resetBlock();
            }.bind(this),
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

var game = new Phaser.Game(config);
