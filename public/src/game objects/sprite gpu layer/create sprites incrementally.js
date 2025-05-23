class Example extends Phaser.Scene
{
    colors;
    spriteGPULayer;

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser-wire-300.png');
        this.load.image('sprite', 'assets/sprites/space-baddie.png');

        for (let i = 1; i <= 32; i++)
        {
            this.load.image(`pixel${i}`, `assets/tests/pixels/${i}.png`);
        }
    }

    create ()
    {
        this.colors = Phaser.Display.Color.HSVColorWheel();

        const layer = this.add.spriteGPULayer('sprite', 0);
        this.spriteGPULayer = layer;

        // const count = 512;
        // const count = 1024;
        // const count = 4096;
        // const count = 8192;
        // const count = 16384;
        // const count = 65536;
        // const count = 131072;
        // const count = 262144;
        // const count = 250000;
        const count = 1_000_000;
        // const count = 524288;

        this.add.image(512, 384, 'logo');

        const text = this.add.text(100, 16, `Sprites: 0`, { font: '16px Courier', fill: '#ffffff' });

        function format (number)
        {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        this.input.on('pointerdown', () => {

            layer.resize(layer.size + count);

            text.setText(`Sprites: ${format(layer.size)}`);

            console.log(layer.size);

        });
    }

    update ()
    {
        const layer = this.spriteGPULayer;

        if (layer.memberCount < layer.size)
        {
            const colors = this.colors;
            const template = {
                x: {
                    ease: 'Linear',
                },
                y: {
                    ease: 'Sine.easeInOut',
                },
                rotation: {
                    ease: 'Linear',
                    amplitude: 3,
                    duration: 500
                },
                // alpha: 0.25,
                tintBlend: {
                    base: 1,
                    ease: 'Linear'
                },
                scaleX: 0.1,
                scaleY: 0.1,
            };

            // The layer can upload smaller segments of the buffer to the GPU,
            // which have the size `bufferUpdateSegmentSize`.
            const len = Math.min(
                layer.memberCount + layer.bufferUpdateSegmentSize,
                layer.size
            );

            console.log('updating', layer.memberCount, 'to', len);

            for (let i = layer.memberCount; i < len; i++)
            {
                template.x.base = Phaser.Math.Between(0, 1024);
                template.x.amplitude = Phaser.Math.Between(-600, 600);
                template.x.duration = Phaser.Math.Between(500, 1000);

                template.y.base = Phaser.Math.Between(256, 512);
                template.y.amplitude = Phaser.Math.Between(-250, 250);
                template.y.duration = Phaser.Math.Wrap(i, 500, 1000);

                template.rotation.delay = Phaser.Math.Wrap(i, 250, 1000);

                template.tintTopLeft = colors[Phaser.Math.Wrap(i, 0, 359)].color;
                template.tintTopRight = colors[Phaser.Math.Wrap(i, 0, 359)].color;

                layer.addMember(template);
            }
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 768,
    scene: Example,
    backgroundColor: '#202020'
};

const game = new Phaser.Game(config);
