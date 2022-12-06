class Example extends Phaser.Scene
{
    blendModes = {
        NORMAL: Phaser.BlendModes.NORMAL,
        ADD: Phaser.BlendModes.ADD,
        MULTIPLY: Phaser.BlendModes.MULTIPLY,
        SCREEN: Phaser.BlendModes.SCREEN
    };

    eases = [
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
    ].sort();

    alphaConfig = {
        start: 1, end: 0, ease: 'Linear'
    };

    scaleConfig = {
        start: 1, end: 0, ease: 'Linear'
    };

    speedConfig = {
        min: 0, max: 200
    };

    angleConfig = {
        min: 0, max: 360
    };

    countText = null;
    move = false;
    emitter = null;
    gui = null;

    preload ()
    {
        this.load.image('spark0', 'assets/particles/blue.png');
        this.load.image('spark1', 'assets/particles/red.png');
    }

    create ()
    {
        if (typeof dat === 'undefined')
        {
            this.add.text(16, 16, 'Please [Launch] this example.');
            return;
        }

        this.gui = new dat.GUI();
        this.emitter = this.add.particles('spark1').createEmitter({
            name: 'sparks',
            x: 400,
            y: 300,
            gravityY: 300,
            speed: this.speedConfig,
            angle: this.angleConfig,
            scale: this.scaleConfig,
            alpha: this.alphaConfig,
            blendMode: 'SCREEN'
        });

        this.gui.add(this.emitter, 'name');
        this.gui.add(this.emitter, 'on');
        this.gui.add(this.emitter, 'blendMode', this.blendModes).name('blend mode').onChange(val => { this.emitter.setBlendMode(Number(val)); });
        this.gui.add(this.angleConfig, 'min', 0, 360, 5).name('angle min').onChange(() => { this.emitter.setAngle(this.angleConfig); });
        this.gui.add(this.angleConfig, 'max', 0, 360, 5).name('angle max').onChange(() => { this.emitter.setAngle(this.angleConfig); });
        this.gui.add({ life: 1000 }, 'life', 100, 5000, 100).onChange(value => { this.emitter.setLifespan(value); });
        this.gui.add({ gravityX: 0 }, 'gravityX', -300, 300, 10).onChange(value => { this.emitter.setGravityX(value); });
        this.gui.add({ gravityY: 300 }, 'gravityY', -300, 300, 10).onChange(value => { this.emitter.setGravityY(value); });
        this.gui.add(this.speedConfig, 'min', 0, 600, 10).name('speed min').onChange(() => { this.emitter.setSpeed(this.speedConfig); });
        this.gui.add(this.speedConfig, 'max', 0, 600, 10).name('speed max').onChange(() => { this.emitter.setSpeed(this.speedConfig); });
        this.gui.add(this.scaleConfig, 'start', 0, 1, 0.1).name('scale start').onChange(() => { this.emitter.setScale(this.scaleConfig); });
        this.gui.add(this.scaleConfig, 'end', 0, 1, 0.1).name('scale end').onChange(() => { this.emitter.setScale(this.scaleConfig); });
        this.gui.add(this.scaleConfig, 'ease', this.eases).name('scale ease').onChange(() => { this.emitter.setScale(this.scaleConfig); });
        this.gui.add(this.alphaConfig, 'start', 0, 1, 0.1).name('alpha start').onChange(() => { this.emitter.setAlpha(this.alphaConfig); });
        this.gui.add(this.alphaConfig, 'end', 0, 1, 0.1).name('alpha end').onChange(() => { this.emitter.setAlpha(this.alphaConfig); });
        this.gui.add(this.alphaConfig, 'ease', this.eases).name('alpha ease').onChange(() => { this.emitter.setAlpha(this.alphaConfig); });
        this.gui.add(this.emitter, 'killAll');
        this.gui.add(this.emitter, 'pause');
        this.gui.add(this.emitter, 'resume');
        this.gui.add({save: this.saveEmitter.bind(this)}, 'save').name('save JSON');

        this.input.on('pointermove', pointer =>
        {
            if (this.move)
            {
                this.emitter.setPosition(pointer.x, pointer.y);
            }
        });

        this.input.on('pointerdown', pointer =>
        {
            this.emitter.setPosition(pointer.x, pointer.y);
            this.move = true;
        });
        this.input.on('pointerup', pointer =>
        {
            this.move = false;
        });

        this.countText = this.add.text(0, 0, 'Alive Particles');
    }

    update ()
    {
        if (!this.countText) { return; }

        this.countText.setText(`Alive Particles: ${this.emitter.getAliveParticleCount()}`);
    }

    saveEmitter ()
    {
        this.load.saveJSON(this.emitter.toJSON(), `${this.emitter.name}.json`);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
