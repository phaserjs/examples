class MainGame extends Phaser.Scene
{
    constructor ()
    {
        super('MainGame');
    }

    create ()
    {
        this.add.image(400, 300, 'bg').setScale(1.0).setScrollFactor(0, 0);

        const grass = this.add.layer();

        const trees = [ 'Spruce-1', 'Spruce-2', 'Spruce-3', 'Spruce-5', 'Spruce-6', 'Flower_2' ];

        for (let i = 0; i < 128; i++)
        {
            let x = Phaser.Math.Between(0, 800);
            let y = Phaser.Math.Between(100, 600 * 4);

            let frame = Phaser.Utils.Array.GetRandom(trees);

            let tree = this.add.image(x, y, 'glade', frame);

            tree.setDepth(y);
            tree.setOrigin(0.5, 1);

            grass.add(tree);
        }

        const camera = this.cameras.main;

        this.tweens.add({
            targets: camera,
            scrollY: 1800,
            duration: 20000,
            yoyo: true,
            loop: -1
        });

        const quit = this.add.image(0, 0, 'quitButton').setOrigin(0, 0).setScrollFactor(0, 0);

        quit.setInteractive();

        quit.once('pointerdown', () => {

            const fx = this.cameras.main.postFX.addWipe(0.3, 1, 1);

            this.scene.transition({
                target: 'Menu',
                duration: 2000,
                moveBelow: true,
                onUpdate: (progress) => {

                    fx.progress = progress;

                }
            });
        });
    }
}

class Example extends Phaser.Scene
{
    constructor ()
    {
        super('Menu');
    }

    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.image('quitButton', 'assets/tests/quitbutton.png');
        this.load.image('playButton', 'assets/tests/playbutton.png');
        this.load.image('logo', 'assets/tests/gametitle.png');
        this.load.image('village', 'assets/pics/village.jpg');
        this.load.image('bg', 'assets/textures/grass.jpg');
        this.load.atlas('glade', 'assets/atlas/glade.png', 'assets/atlas/glade.json');
    }

    create ()
    {
        this.add.image(400, 300, 'village');

        this.add.particles(400, 490, 'flares',
        {
            frame: 'white',
            color: [ 0x96e0da, 0x937ef3 ],
            colorEase: 'quart.out',
            lifespan: 2500,
            angle: { min: -140, max: -40 },
            scale: { start: 1, end: 0, ease: 'sine.in' },
            speed: { min: 150, max: 200 },
            advance: 2000,
            frequency: 100,
            blendMode: 'ADD'
        });

        this.add.image(400, 160, 'logo');

        const play = this.add.image(400, 520, 'playButton');

        play.setInteractive();

        play.once('pointerdown', () => {

            const fx = this.cameras.main.postFX.addWipe();

            this.scene.transition({
                target: 'MainGame',
                duration: 2000,
                moveBelow: true,
                onUpdate: (progress) => {

                    fx.progress = progress;

                }
            });
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00002d',
    parent: 'phaser-example',
    scene: [ Example, MainGame ]
};

let game = new Phaser.Game(config);
