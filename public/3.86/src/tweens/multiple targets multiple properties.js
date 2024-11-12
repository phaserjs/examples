class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create() {
        var image1 = this.add.image(130, 50, 'block');
        var image2 = this.add.image(190, 80, 'block');
        var image3 = this.add.image(50, 150, 'block');

        this.tweens.add({
            targets: [image1, image2, image3],
            props: {
                x: { value: '+=600', duration: 3000, ease: 'Power2' },
                y: { value: '500', duration: 1500, ease: 'Bounce.easeOut' }
            },
            delay: 1000
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