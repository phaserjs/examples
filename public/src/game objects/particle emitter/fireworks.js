// Happy birthday, Phaser!

const { Between, FloatBetween } = Phaser.Math;

const { GetRandom } = Phaser.Utils.Array;

class Example extends Phaser.Scene {
    emitter1;
    emitter2;
    emitter3;
    renderTexture;
    tints = Phaser.Display.Color.HSVColorWheel().map(({ r, g, b }) => (new Phaser.Display.Color(r, g, b)).color);

    init () {
        const stars = this.textures.createCanvas('stars', 800, 600);
        const ctx = stars.getContext();

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, 800, 600);
        ctx.fillStyle = 'white';

        let i = 800;
        while (i-- > 0) {
            ctx.globalAlpha = FloatBetween(0, 1);
            ctx.fillRect(Between(0, 799), Between(0, 599), 1, 1);
        }

        stars.refresh();
    }

    create () {
        this.add.image(0, 0, 'stars').setOrigin(0, 0);

        this.renderTexture = this.add.renderTexture(0, 0, 800, 600)
            .setOrigin(0, 0)
            .setBlendMode('ADD');

        const emitterConfig = {
            alpha: { start: 1, end: 0, ease: 'Quad.easeOut' },
            angle: { start: 0, end: 360, steps: 100 },
            blendMode: 'SCREEN',
            emitting: false,
            frequency: -1,
            gravityY: 100,
            lifespan: 3000,
            quantity: 500,
            reserve: 500,
            rotate: 45,
            speed: { min: 100, max: 200 }
        };

        this.emitter1 = this.make.particles({ key: '__WHITE', config: emitterConfig }, false);
        this.emitter2 = this.make.particles({ key: '__WHITE', config: emitterConfig }, false);
        this.emitter3 = this.make.particles({ key: '__WHITE', config: emitterConfig }, false);

        this.time.addEvent({
            delay: 3000,
            startAt: Between(0, 3000),
            repeat: -1,
            callback: () => { this.updateEmitter(this.emitter1); }
        });

        this.time.addEvent({
            delay: 4000,
            startAt: Between(0, 4000),
            repeat: -1,
            callback: () => { this.updateEmitter(this.emitter2); }
        });

        this.time.addEvent({
            delay: 5000,
            startAt: Between(0, 5000),
            repeat: -1,
            callback: () => { this.updateEmitter(this.emitter3); }
        });
    }

    update (time, delta) {
        this.renderTexture
            // Black
            .fill(0, 0.01 * delta)
            .draw([
                this.emitter1,
                this.emitter2,
                this.emitter3
            ]);
    }

    updateEmitter (emitter) {
        emitter.particleX = Between(0, 800);
        emitter.particleY = Between(0, 300);
        emitter.setParticleTint(GetRandom(this.tints));
        emitter.explode();
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
