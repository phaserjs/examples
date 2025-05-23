class Example extends Phaser.Scene
{
    smoke;
    rate = 16;
    lifespan = 2048;
    count = this.rate * this.lifespan / 16;
    currentMemberIndex = 0;
    currentSwirl = 0;
    emitNewMembers;
    lastPosition = new Phaser.Math.Vector2();
    swirliness = 4;

    preload ()
    {
        this.load.image('smoke0', 'assets/particles/smoke0.png');
    }

    create ()
    {
        this.smoke = this.add.spriteGPULayer('smoke0', this.count);

        // Prepopulate the layer with invisible members.
        let template = {
            alpha: 0
        };

        for (let i = 0; i < this.count; i++)
        {
            this.smoke.addMember(template);
        }

        // Prepare a template for the members.
        template = {
            x: {
                ease: 'Circ.easeInOut',
                yoyo: true
            },
            y: {
                gravityFactor: -0.05,
                duration: this.lifespan,
                ease: 'Gravity'
            },
            rotation: {
                duration: this.lifespan,
                ease: 'Smoothstep.easeOut',
            },
            scaleX: {
                // base: 0.2,
                // amplitude: 0.4,
                base: 0.05,
                amplitude: 0.1,
                duration: this.lifespan,
                ease: 'Smoothstep.easeOut'
            },
            scaleY: {
                // base: 0.2,
                // amplitude: 0.4,
                base: 0.05,
                amplitude: 0.1,
                duration: this.lifespan,
                ease: 'Smoothstep.easeOut'
            },
            alpha: {
                base: 0.1,
                amplitude: -0.1,
                duration: this.lifespan,
                ease: 'Smoothstep.easeInOut'
            }
        };

        this.emitNewMembers = () => {
            const pointerX = this.input.activePointer.x;
            const pointerY = this.input.activePointer.y;
            const currentPosition = new Phaser.Math.Vector2(pointerX, pointerY);
            const rate = this.rate;

            for (let i = 0; i < rate; i++)
            {
                const pos = Phaser.Math.LinearXY(
                    this.lastPosition,
                    currentPosition,
                    i / rate
                );
                this.currentMemberIndex = Phaser.Math.Wrap(
                    this.currentMemberIndex - 1,
                    0,
                    this.count
                );
                this.currentSwirl += (Math.random() - 0.5) * 0.5;

                template.x.base = pos.x;
                template.x.amplitude = Math.cos(this.currentSwirl) * this.swirliness * 2;
                template.x.duration = this.lifespan * (1 - 0.5 * Math.random());
                template.x.delay = this.lifespan * 0.5 * Math.random();
                template.y.base = pos.y;
                // template.y.velocity = -64;
                // template.y.velocity = -64 + 16 * Math.random();
                template.y.velocity = -64 + this.swirliness * Math.sin(this.currentSwirl);
                template.rotation.base = Math.random() * Phaser.Math.PI2;
                template.rotation.amplitude = template.rotation.base + Math.random() - 0.5;

                this.smoke.editMember(this.currentMemberIndex, template);
            }

            this.lastPosition.set(pointerX, pointerY);
        };
    }

    update ()
    {
        this.emitNewMembers();
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example,
    backgroundColor: '#202020'
};

const game = new Phaser.Game(config);
