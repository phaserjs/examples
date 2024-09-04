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
        var image = this.add.image(100, 100, 'block');

        var tween = this.tweens.add({
            targets: image,
            x: 600,
            paused: false,
            yoyo: true,
            repeat: -1
        });

        this.input.once(Phaser.Input.Events.POINTER_DOWN, function ()
        {

            console.log('stopped?');
            tween.stop();

        }, this);

        this.add.text(20, 20, 'Click to stop the tween, then see developer console logs.');
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