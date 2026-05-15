class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        // this.load.setPath('assets/loader-tests/');
        this.load.atlasPCT('atlas', 'assets/loader-tests/atlas.pct', 'assets/loader-tests/');
    }

    create ()
    {
        this.add.image(400, 300, 'atlas', 'horse/frame_06_delay-0.05s');
        this.add.image(400, 300, 'atlas', 'cube/frame19');

        // const atlasTexture = this.textures.get('megaset');

        // const frames = atlasTexture.getFrameNames();

        // for (let i = 0; i < frames.length; i++)
        // {
        //     const x = Phaser.Math.Between(0, 1024);
        //     const y = Phaser.Math.Between(0, 768);

        //     this.add.image(x, y, 'megaset', frames[i]);
        // }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
