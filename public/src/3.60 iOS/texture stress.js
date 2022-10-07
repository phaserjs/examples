class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.sprites = 0;
    }

    preload ()
    {
        for (let i = 1; i <= 32; i++)
        {
            const f = Phaser.Utils.String.Pad(i, 2, '0', 1);

            this.load.image(`veg${f}`, `assets/tests/fruit/veg${f}.png`);
        }
    }

    create ()
    {
        this.debug = this.add.text(0, 64).setDepth(1);

        console.log(this.debug.getPipelineName());
        console.log(this.game.renderer.maxTextures);

        this.addFruit();

        this.input.on('pointerdown', () => this.addFruit());
    }

    addFruit ()
    {
        for (let i = 0; i < 64; i++)
        {
            const x = Phaser.Math.Between(200, 800);
            const y = Phaser.Math.Between(0, 600);
            const f = Phaser.Utils.String.Pad(Phaser.Math.Between(1, 32), 2, '0', 1);

            this.add.image(x, y, `veg${f}`);

            this.sprites++;
        }

        this.debug.setText([
            'Pipeline: ' + this.debug.getPipelineName(),
            'Sprites: ' + this.sprites,
            'AA: ' + this.game.config.antialias + ' - ' + this.game.config.antialiasGL,
            'Buffer: ' + this.game.config.preserveDrawingBuffer,
            'PowerPref: ' + this.game.config.powerPreference,
            'maxTextures: ' + this.game.config.maxTextures
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#02023d',
    parent: 'phaser-example',
    scene: Example,
    render: {
        defaultPipeline: 'MobilePipeline'
        // autoMobilePipeline: false,
        // antialias: false,
        // antialiasGL: false,
        // preserveDrawingBuffer: false,
        // maxTextures: 16,
        // powerPreference: 'high-performance'
    }
};

const game = new Phaser.Game(config);
