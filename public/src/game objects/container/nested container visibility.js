class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const container1 = this.add.container(100, 100);
        const container2 = this.add.container(200, 200);

        const sprite = this.add.image(0, 0, 'eye');
        
        container1.add(container2);
        container2.add(sprite);

        this.input.once('pointerdown', () =>
        {

            container2.setVisible(false);
            console.log('off', container2.visible);

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
