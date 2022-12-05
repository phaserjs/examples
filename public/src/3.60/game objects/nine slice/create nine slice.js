class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('test', 'assets/sprites/128x128.png');
        this.load.image('test2', 'assets/sprites/button-bg.png');
    }

    create ()
    {
        // this.add.image(400, 170, 'test');

        window.nine = this.add.nineslice({ left: 50, right: 50, width: 700 }, 400, 300, 'test2');

        this.tweens.add({
            targets: window.nine,
            width: 300,
            duration: 3000,
            ease: 'sine.inout',
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
