class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'SceneB'
        });
    }

    init ()
    {
        this.cameras.main.fadeIn(100);
        const fxCamera = this.cameras.main.postFX.addPixelate(40);
        this.add.tween({
            targets: fxCamera,
            duration: 700,
            amount: -1,
        });
    }

    create ()
    {
        const bg = this.add.image(0, 0, "bg1")
            .setScale(.5)
            .setOrigin(0);

        const planet = this.add.image(this.sys.scale.width / 2, this.sys.scale.height / 2, "planet")
            .setScale(.3);

        // Planet rotation
        this.add.tween({
            targets: planet,
            duration: 10000,
            angle: 360,
            repeat: -1

        });

        // FX
        const pixelated = this.cameras.main.postFX.addPixelate(-1);

        // Create button
        const buttonBox = this.add.rectangle(this.sys.scale.width / 2, this.sys.scale.height - 100, 290, 50, 0x000000, 1);
        buttonBox.setInteractive();
        const buttonText = this.add.text(this.sys.scale.width / 2, this.sys.scale.height - 100, "Click to Change Scene").setOrigin(0.5);

        // Click to change scene
        buttonBox.on('pointerdown', () => {
            // Transition to next scene
            this.add.tween({
                targets: pixelated,
                duration: 700,
                amount: 40,
                onComplete: () => {
                    this.cameras.main.fadeOut(100);
                    this.scene.start('SceneA');
                }
            })
        });

        // Hover button properties
        buttonBox.on('pointerover', () => {
            buttonBox.setFillStyle(0x222222, 1);
            this.input.setDefaultCursor('pointer');
        });

        buttonBox.on('pointerout', () => {
            buttonBox.setFillStyle(0x000000, 1);
            this.input.setDefaultCursor('default');
        });
    }
}

class SceneA extends Phaser.Scene
{
    ship;
    flame;

    constructor ()
    {
        super({ key: 'SceneA' });
    }

    init ()
    {
        this.cameras.main.fadeIn(100);
        const fxCamera = this.cameras.main.postFX.addPixelate(40);
        this.add.tween({
            targets: fxCamera,
            duration: 700,
            amount: -1,
        });
    }

    preload ()
    {
        this.load.setPath('assets/');

        this.load.image("bg1", "skies/pixelsky.png");
        this.load.image("bg2", "skies/space3.png");

        this.load.image("ship", "sprites/x2kship.png");

        this.load.atlas('flares', '/particles/flares.png', '/particles/flares.json');
        this.load.image("planet", "tests/space/blue-planet.png");
    }

    create ()
    {
        const bg = this.add.image(0, 0, "bg2")
            .setOrigin(0);

        this.ship = this.add.image(200, 100, "ship")
            .setScale(1.5);

        // FX
        const pixelated = this.cameras.main.postFX.addPixelate(-1);

        // Create button
        const buttonBox = this.add.rectangle(this.sys.scale.width / 2, this.sys.scale.height - 100, 290, 50, 0x000000, 1);
        buttonBox.setInteractive();
        const buttonText = this.add.text(this.sys.scale.width / 2, this.sys.scale.height - 100, "Click to Change Scene").setOrigin(0.5);

        // Click to change scene
        buttonBox.on('pointerdown', () => {
            // Transition to next scene
            this.add.tween({
                targets: pixelated,
                duration: 700,
                amount: 40,
                onComplete: () => {
                    this.cameras.main.fadeOut(100);
                    this.scene.start('SceneB');
                }
            })
        });

        // Hover button properties
        buttonBox.on('pointerover', () => {
            buttonBox.setFillStyle(0x222222, 1);
            this.input.setDefaultCursor('pointer');
        });

        buttonBox.on('pointerout', () => {
            buttonBox.setFillStyle(0x000000, 1);
            this.input.setDefaultCursor('default');
        });

        this.flame = this.add.particles(this.ship.x -65, this.ship.y, 'flares',
            {
                frame: 'white',
                color: [ 0xfacc22, 0xf89800, 0xf83600, 0x9f0404 ],
                colorEase: 'quad.out',
                lifespan: 1000,
                angle: { min: 175, max: 185 },
                scale: { start: 0.40, end: 0, ease: 'sine.out' },
                speed: 200,
                advance: 2000,
                blendMode: 'ADD'
            });
    }

    update ()
    {
        // Wrap ship
        this.ship.x = Phaser.Math.Wrap(this.ship.x + 1, 1, this.sys.scale.width + 50);
        this.flame.setPosition(this.ship.x -65, this.ship.y);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    pixelArt: true,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [SceneA, SceneB]
};

const game = new Phaser.Game(config);
