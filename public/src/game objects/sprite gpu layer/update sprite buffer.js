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

    populateGPULayer ()
    {
        const layer = this.spriteGPULayer;

        if (layer.memberCount < layer.size)
        {
            const colors = this.colors;
            const template = {
                x: {
                    ease: 'Quad.easeInOut',
                },
                y: {
                    ease: 'Quad.easeInOut',
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
                }
            };

            const len = layer.size;

            for (let i = layer.memberCount; i < len; i++)
            {
                template.x.base = Phaser.Math.Between(0, 1024);
                template.x.amplitude = Phaser.Math.Between(-6, 6);
                template.x.duration = Phaser.Math.Between(500, 1000);

                template.y.base = Phaser.Math.Between(0, 768);
                template.y.amplitude = Phaser.Math.Between(-6, 6);
                template.y.duration = Phaser.Math.Wrap(i, 500, 1000);

                template.rotation.delay = Phaser.Math.Wrap(i, 250, 1000);

                template.tintTopLeft = colors[Phaser.Math.Wrap(i, 0, 359)].color;
                template.tintTopRight = colors[Phaser.Math.Wrap(i, 0, 359)].color;

                layer.addMember(template);
            }
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
        const count = 65536;
        // const count = 131072;
        // const count = 262144;
        // const count = 250000;
        // const count = 524288;

        this.add.image(512, 384, 'logo');

        const text = this.add.text(100, 16, `Sprites: 0`, { font: '16px Courier', fill: '#ffffff' });

        function format (number)
        {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        this.input.on('pointerdown', () => {

            layer.resize(layer.size + count);

            this.populateGPULayer();

            text.setText(`Sprites: ${format(layer.size)}`);

            console.log(layer.size);

        });
    }

    update (time, delta)
    {
        // Apply a lateral motion around the mouse.
        const mx = this.input.mousePointer.x;
        const my = this.input.mousePointer.y;

        const layout = this.spriteGPULayer.submitterNode.instanceBufferLayout;
        const stride = layout.layout.stride / Float32Array.BYTES_PER_ELEMENT;
        const len = this.spriteGPULayer.size;
        const f32 = layout.buffer.viewF32;

        for (let i = 0; i < len; i++)
        {
            const address = i * stride;
            let x = f32[address];
            let y = f32[address + 4];
            const dx = x - mx;
            const dy = y - my;
            const a = Math.atan2(dy, dx);
            const h = Math.sqrt(dx * dx + dy * dy);
            const k = ((i + Math.random()) % 32 + 1) / 256;

            const a2 = a + Math.PI / 4;
            x += Math.cos(a2) * k * delta;
            y += Math.sin(a2) * k * delta;

            const f = Math.pow(Math.max((h - 128) / 128, 0), 2) / h / 8;
            x -= f * dx * k * delta;
            y -= f * dy * k * delta;

            f32[address] = x;
            f32[address + 4] = y;
        }

        this.spriteGPULayer.setAllSegmentsNeedUpdate();
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
