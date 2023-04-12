class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    }

    create ()
    {
        const container1 = this.add.container(400, 100);
        const container2 = this.add.container(400, 300);
        const container3 = this.add.container(400, 500);

        const image1 = this.add.image(0, 0, 'logo').setInteractive();
        const image2 = this.add.image(0, 0, 'logo').setInteractive();
        const image3 = this.add.image(0, 0, 'logo').setInteractive();

        container1.add(image1);
        container2.add(image2);
        container3.add(image3);

        const text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        image1.on('pointerover', () =>
        {
            text.setText('Over Image 1');
        });

        image2.on('pointerover', () =>
        {
            text.setText('Over Image 2');
        });

        image3.on('pointerover', () =>
        {
            text.setText('Over Image 3');
        });

        //  Ignore container2
        this.cameras.main.ignore(container2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
