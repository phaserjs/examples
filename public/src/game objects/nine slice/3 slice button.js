class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        const button1 = this.add.nineslice(0, 100, 'ui', 'button-bg', 128, 110, 64, 64).setOrigin(0, 0.5);
        const button2 = this.add.nineslice(400, 300, 'ui', 'button-bg', 128, 110, 64, 64);
        const button3 = this.add.nineslice(800, 500, 'ui', 'button-bg', 128, 110, 64, 64).setOrigin(1, 0.5);

        this.tweens.add({
            targets: [ button1, button2, button3 ],
            width: 700,
            duration: 3000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#7b0046',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
