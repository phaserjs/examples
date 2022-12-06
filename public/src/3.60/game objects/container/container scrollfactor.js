class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {

        const container0 = this.add.container(0, 0);
        const container1 = this.add.container(0, 0);
        const container2 = this.add.container(0, 0);
        const container3 = this.add.container(0, 0);

        const image0 = this.add.image(0, 0, 'lemming');
        const image1 = this.add.image(-100, -100, 'lemming');
        const image2 = this.add.image(100, -100, 'lemming');
        const image3 = this.add.image(100, 100, 'lemming');
        const image4 = this.add.image(-100, 100, 'lemming');

        for (let index = 0; index < 10; index++)
        {
            container0.add(this.add.image(Math.random() * 800, Math.random() * 600, 'lemming'));
            container1.add(this.add.image(Math.random() * 800, Math.random() * 600, 'lemming'));
            container2.add(this.add.image(Math.random() * 800, Math.random() * 600, 'lemming'));
            container3.add(this.add.image(Math.random() * 800, Math.random() * 600, 'lemming'));
        }

        container3.setScrollFactor(1.00);
        container2.setScrollFactor(0.75);
        container1.setScrollFactor(0.50);
        container0.setScrollFactor(0.25);

        this.time = 0.0;

    }

    update ()
    {
        this.cameras.main.scrollX = Math.cos(this.time) * 100;
        this.cameras.main.scrollY = Math.sin(this.time) * 100;
        this.time += 0.01;
    }
}

const config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
