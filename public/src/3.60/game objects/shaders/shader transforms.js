class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.glsl('marble', 'assets/shaders/marble.glsl.js');
        this.load.image('bird', 'assets/pics/birdy.png');
    }

    create ()
    {
        this.add.image(400, 600, 'bird').setOrigin(0.5, 1);

        const shader = this.add.shader('marble', 400, 300, 800, 600);


        this.input.once('pointerdown', function ()
        {

            this.tweens.add({
                targets: shader,
                props: {
                    scaleX: { value: 0.2, duration: 4000 },
                    scaleY: { value: 0.2, duration: 4000 },
                    angle: { value: 360, duration: 2000 },
                    y: { value: 100, duration: 1000 }
                },
                ease: 'Sine.easeInOut',
                yoyo: true,
                repeat: -1
            });

        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#0972ff',
    scene: Example
};

const game = new Phaser.Game(config);
