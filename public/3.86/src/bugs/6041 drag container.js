class Example extends Phaser.Scene
{
    constructor () {
        super();
    }

    create () {

        const slider = this.add.container(400, 300);

        const bar = this.add.rectangle(0, 0, 400, 32, 0x9d9d9d);
        const control = this.add.circle(0, 0, 24, 0xff00ff)

        slider.add([ bar, control ]);

        control.setInteractive({ draggable: true });

        control.on('drag', function (pointer, dragX, dragY) {

            control.x = Phaser.Math.Clamp(dragX, -200, 200);
            // console.log(dragX);

        });

        slider.setSize(400, 32);
        slider.setInteractive({ draggable: true });

        slider.on('drag', function (pointer, dragX, dragY) {

            slider.x = dragX;
            slider.y = dragY;

        });

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
