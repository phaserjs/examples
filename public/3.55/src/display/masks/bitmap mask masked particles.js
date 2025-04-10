class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v355');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('backdrop', 'assets/pics/platformer-backdrop.png');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const backdrop = this.make.image({
            x: game.config.width / 2,
            y: game.config.height / 2,
            key: 'backdrop',
            add: true
        }).setScale(2);

        const particles = this.add.particles('flares');

        const emitter = particles.createEmitter({
            frame: 'yellow',
            x: 300,
            y: 400,
            lifespan: 2000,
            speedY: { min: -100, max: -600 },
            speedX: { min: -100, max: 100 },
            angle: -90,
            gravityY: 300,
            scale: { start: 0.4, end: 0 },
            quantity: 50,
            blendMode: 'ADD'
        });

        const bunny = this.make.sprite({
            x: game.config.width / 2,
            y: game.config.height / 2,
            key: 'bunny',
            add: false
        });

        //particles.visible = false;
        particles.mask = new Phaser.Display.Masks.BitmapMask(this, bunny);

        this.input.on('pointermove', function (pointer) {

            emitter.setPosition(pointer.x, pointer.y);

        });

    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 640,
    height: 480,
    scene: [ Example ]
};

const game = new Phaser.Game(config);
