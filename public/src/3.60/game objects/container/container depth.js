class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        this.add.image(400, 300, 'logo');

        const image0 = this.add.image(0, 0, 'lemming');
        const image1 = this.add.image(-100, -100, 'lemming');
        const image2 = this.add.image(100, -100, 'lemming');
        const image3 = this.add.image(100, 100, 'lemming');
        const image4 = this.add.image(-100, 100, 'lemming');

        const container = this.add.container(400, 300, [ image0, image1, image2, image3, image4 ]);

        this.tweens.add({
            targets: container,
            angle: 360,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
