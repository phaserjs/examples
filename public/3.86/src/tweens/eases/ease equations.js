class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('bar', 'assets/sprites/bluebar.png');
    }

    create() {
        //  There are 32 built-in easing equations including Elastic which is shown in the Elasticity example

        var eases = [
            'Linear',
            'Quad.easeIn',
            'Cubic.easeIn',
            'Quart.easeIn',
            'Quint.easeIn',
            'Sine.easeIn',
            'Expo.easeIn',
            'Circ.easeIn',
            'Back.easeIn',
            'Bounce.easeIn',
            'Quad.easeOut',
            'Cubic.easeOut',
            'Quart.easeOut',
            'Quint.easeOut',
            'Sine.easeOut',
            'Expo.easeOut',
            'Circ.easeOut',
            'Back.easeOut',
            'Bounce.easeOut',
            'Quad.easeInOut',
            'Cubic.easeInOut',
            'Quart.easeInOut',
            'Quint.easeInOut',
            'Sine.easeInOut',
            'Expo.easeInOut',
            'Circ.easeInOut',
            'Back.easeInOut',
            'Bounce.easeInOut'
        ];

        const stepY = 19

        // labels
        for (const [index, easeFnName] of eases.entries()) {
            this.add.text(140, 23 + (index * stepY), easeFnName).setOrigin(1, 0).setFontSize(14)
        }

        var markers = this.add.group({ key: 'bar', repeat: 27, setXY: { x: 196, y: 32, stepY }, setAlpha: { value: 0.3 } });

        var images = this.add.group({ key: 'bar', repeat: 27, setXY: { x: 196, y: 32, stepY } });


        var _this = this;

        images.children.iterate(function (child) {

            _this.tweens.add({
                targets: child,
                x: 700,
                ease: eases.shift(),
                duration: 1500,
                delay: 1000,
                yoyo: true,
                repeat: -1,
                repeatDelay: 1000,
                hold: 1000
            });

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