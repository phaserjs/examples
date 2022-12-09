class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('buttons', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
        // this.load.image('test', 'assets/sprites/128x128.png');
        // this.load.image('test2', 'assets/sprites/button-bg.png');
        // this.load.image('box', 'assets/tests/blue-box.png');
    }

    create ()
    {
        window.nine = this.add.nineslice(400, 300, 'buttons', 'blue-box', 600, 400, 16, 16, 32, 16);

        // this.add.nineslice(400, 300, 'buttons', 'yellow_sliderRight', 300, 31, 6, 20, 14, 16);

        window.slice3 = this.add.nineslice(400, 300, 'buttons', 'button-bg', 400, 110, 64, 64);

        /*
        this.tweens.add({
            targets: window.nine,
            width: 100,
            duration: 3000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });

        this.tweens.add({
            targets: window.nine,
            height: 100,
            duration: 6000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });
        */
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
