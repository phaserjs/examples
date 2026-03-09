class Example extends Phaser.Scene
{
    noise;

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('bg', 'assets/sprites/blur-bg.png');
    }

    create()
    {
        const { width, height } = this.scale;

        this.add.image(width / 2, height / 2, 'bg');

        // This technique requires 4D noise.
        this.noise = this.add.noisecell4d({
            noiseCells: [ 16, 9, 16, 16 ],
            noiseColorStart: [ 0, 0, 0, 0 ],
            noiseColorEnd: [ 1, 1, 13 / 16, 0.5 ]
        }, width / 2, height / 2, width, height)
        .setBlendMode(Phaser.BlendModes.ADD);
    }

    update (time)
    {
        const t = time / 16000;

        // Rotate in ZW.
        // THe pattern repeats, but never loses precision.
        this.noise.noiseOffset[2] = Math.cos(t);
        this.noise.noiseOffset[3] = Math.sin(t);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
