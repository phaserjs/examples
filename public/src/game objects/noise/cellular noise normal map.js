class Example extends Phaser.Scene
{
    bg;
    trees;
    noise;

    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.atlas('walker', 'assets/animations/walker.png', 'assets/animations/walker.json');
        this.load.image('sky', 'assets/skies/ms3-sky.png');
        this.load.image('trees', 'assets/skies/ms3-trees.png');
    }

    create ()
    {
        this.bg = this.add.tileSprite(0, 38, 800, 296, 'sky').setOrigin(0, 0);
        this.trees = this.add.tileSprite(0, 280, 800, 320, 'trees').setOrigin(0, 0);

        const animConfig = {
            key: 'walk',
            frames: 'walker',
            frameRate: 60,
            repeat: -1
        };

        this.anims.create(animConfig);

        const sprite = this.add.sprite(400, 484, 'walker', 'frame_0000');

        sprite.play('walk');

        // Move the scene up to make room for a reflection.
        this.bg.y -= 200;
        this.trees.y -= 200;
        sprite.y -= 200;

        // Capture the current frame.
        this.cameras.main.forceComposite = true;
        this.add.captureFrame('capture');

        // Create animated normal map for ripples.
        this.noise = this.add.noisecell4d({
            noiseCells: [ 4, 32, 4, 4 ],
            noiseIterations: 4,
            noiseNormalMap: true,
            noiseNormalScale: 1
        }, 0, 0, this.scale.width, this.scale.height)
        .setRenderToTexture('noise-normal');

        // Show reflection.
        this.add.image(400, 500, 'capture')
        .setFlipY(true)
        .setTint(0xaabbcc)
        .enableFilters().filters.external.addDisplacement('noise-normal', 1, 1);
    }

    update ()
    {
        this.bg.tilePositionX -= 2;
        this.trees.tilePositionX -= 6;
        this.noise.noiseOffset = [
            this.noise.noiseOffset[0] - 6 / 800, // Match background scroll.
            0,
            Math.cos(this.noise.noiseOffset[0] / 10), // Evolve noise field.
            Math.sin(this.noise.noiseOffset[0] / 10),
        ];
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#301828',
    scene: Example
};

const game = new Phaser.Game(config);
