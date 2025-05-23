class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        const bunny = this.add.image(250, 300, 'bunny');

        const count = 1024;

        const layer = this.add.spriteGPULayer('bunny', 1 + count);

        const template = {
            x: {
                base: 550,
                ease: 'Linear',
                amplitude: -100,
                duration: 500
            },
            y: {
                base: 450,
                ease: 'Quad.easeOut',
                amplitude: -100,
                duration: 250
            },
            rotation: {
                base: -0.25,
                ease: 'Linear',
                amplitude: 0.5,
                duration: 500
            },
            scaleX: {
                base: 1.1,
                ease: 'Cubic.easeOut',
                amplitude: -0.1,
                duration: 250
            },
            scaleY: {
                base: 0.8,
                ease: 'Cubic.easeOut',
                amplitude: 0.2,
                duration: 250
            },
            originY: 1,
            tintBlend: {
                base: 1,
                ease: 'Quad.easeOut',
                amplitude: -1,
                duration: 500,
                delay: -250
            },
            tintTopLeft: 0xff0000,
            tintBottomLeft: 0x00ff00,
            tintTopRight: 0x0000ff,
            alphaBottomLeft: 0,
            alphaBottomRight: 0,
        };

        layer.addMember(template);

        for (let i = 0; i < count; i++)
        {
            const phase = Math.random() * 1000;

            template.x.base = Math.random() * 800;
            template.y.base = 600 - Math.random() * 100;
            template.x.delay = phase;
            template.y.delay = phase;
            template.rotation.delay = phase;
            template.scaleX.delay = phase;
            template.scaleY.delay = phase;
            template.tintBlend.delay = phase - 250;

            layer.addMember(template);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    backgroundColor: '#808080'
};

const game = new Phaser.Game(config);
