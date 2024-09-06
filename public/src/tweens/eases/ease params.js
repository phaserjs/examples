class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('block', 'assets/sprites/block.png');
    }

    create() {
        var marker = this.add.image(100, 300, 'block').setAlpha(0.3);
        var image = this.add.image(100, 300, 'block');

        //  The 'Back' ease takes one argument: overshoot.
        //  The default value is 1.70158
        //  But you can set whatever you like in the easeParams array

        this.tweens.add({
            targets: image,
            x: 600,
            duration: 3000,
            ease: 'Back',
            easeParams: [3.5],
            delay: 1000,
            yoyo: true,
            loop: -1
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
