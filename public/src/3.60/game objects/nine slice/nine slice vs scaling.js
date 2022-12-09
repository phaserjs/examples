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
        const panel = this.add.nineslice(0, 0, 'ui', 'PopupBackground400', 400, 275, 160, 160, 100, 100).setOrigin(0, 0);

        const image = this.add.image(400, 0, 'ui', 'PopupBackground400').setOrigin(0, 0);

        this.tweens.add({
            targets: panel,
            height: 600,
            duration: 6000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
        });

        this.tweens.add({
            targets: image,
            displayHeight: 600,
            duration: 6000,
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
    backgroundColor: '#005826',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
