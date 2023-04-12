class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        //  Here we've got 1 of each game object:
        const image = this.add.image(0, 0, 'lemming');
        const text = this.add.text(60, 0, 'Oh No!', { font: '16px Courier', fill: '#00ff00' });

        const container1 = this.add.container(200, 300).setExclusive(true);
        container1.add([ image, text ]);

        const container2 = this.add.container(400, 300).setExclusive(false);
        container2.add([ image, text ]);

        const container3 = this.add.container(600, 300).setExclusive(false);
        container3.add([ image, text ]);

        this.tweens.add({
            targets: [ container1, container2, container3 ],
            angle: 360,
            duration: 6000,
            repeat: -1
        });

        this.tweens.add({
            targets: container2,
            scaleX: 2,
            scaleY: 2,
            duration: 3000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: container3,
            alpha: 0,
            duration: 3000,
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
