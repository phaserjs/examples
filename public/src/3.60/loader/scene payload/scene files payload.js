//  Files specified in the Scene config files payload
//  will be loaded in *before* the Scene is started,
//  meaning they're available before even the Scene.preload function (if set) is called

//  This is perfect for loading in small JSON config files for example,
//  or a tiny amount of preloader assets that the preloader itself needs to use.
class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' },
                    { type: 'atlas', key: 'megaset', textureURL: 'assets/atlas/megaset-0.png', atlasURL: 'assets/atlas/megaset-0.json'}
                ]
            }
        });
    }

    preload ()
    {
        //  You can still preload other assets too
        this.load.image('face', 'assets/pics/bw-face.png');
    }

    create ()
    {
        this.add.image(400, 300, 'face');
        this.add.image(400, 300, 'sonic');

        const atlasTexture = this.textures.get('megaset');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.add.image(x, y, 'megaset', frames[i]);
        }
    }
}


const gameConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(gameConfig);
