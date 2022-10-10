class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.swaps = 0;
        this.draws = 0;

        this.px = 256;
        this.py = 32;
        this.pf = 1;
    }

    preload ()
    {
        for (let i = 1; i <= 32; i++)
        {
            this.load.image(`pixel${i}`, `assets/tests/pixels/${i}.png`);
        }
    }

    create ()
    {
        this.debug = this.add.text(0, 64).setDepth(1).setResolution(2);

        this.addPixels(64);

        this.input.on('pointerdown', pointer => {

            if (pointer.worldX < 200)
            {
                this.addPixels(256);
            }
            else
            {
                this.addPixels(64);
            }

        });
    }

    addPixels (qty = 64)
    {
        const pipeline = this.debug.getPipelineName();
        const maxTextures = this.game.renderer.maxTextures;

        for (let i = 0; i < qty; i++)
        {
            this.add.image(this.px, this.py, `pixel${this.pf}`).setOrigin(0, 0);

            this.px += 2;

            if (this.px >= 768)
            {
                this.px = 256;
                this.py += 2;
            }

            this.pf++;

            if (this.pf === 33)
            {
                this.pf = 1;
            }

            this.swaps++;

            if (pipeline === 'MultiPipeline')
            {
                if (i % maxTextures === 0)
                {
                    this.draws++;
                }
            }
            else
            {
                this.draws++;
            }
        }

        this.debug.setText([
            'Pipeline: ' + pipeline,
            'Texture Binds: ' + this.swaps,
            'Draw Calls: ' + this.draws,
            'Max Textures: ' + maxTextures
        ]);
    }
}

//  With Spector.gl
//  Multi = Binds 1792, Draws 112
//  Without
//  Multi = Binds 45,824, Draws 2864!

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#02023d',
    parent: 'phaser-example',
    scene: Example,
    render: {
        // defaultPipeline: 'MobilePipeline'
        // autoMobilePipeline: false,
        // maxTextures: 16,
    }
};

const game = new Phaser.Game(config);
