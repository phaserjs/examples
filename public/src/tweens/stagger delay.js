class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/sunset.png');
        this.load.image('block', 'assets/sprites/block-ice.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const image1 = this.add.image(100, 100, 'block').setScale(0.4);
        const image2 = this.add.image(100, 200, 'block').setScale(0.4);
        const image3 = this.add.image(100, 300, 'block').setScale(0.4);
        const image4 = this.add.image(100, 400, 'block').setScale(0.4);
        const image5 = this.add.image(100, 500, 'block').setScale(0.4);

        this.tweens.add({
            targets: [ image1, image2, image3, image4, image5 ],
            x: 700,
            yoyo: true,
            duration: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
            delay: this.tweens.stagger(100)
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
