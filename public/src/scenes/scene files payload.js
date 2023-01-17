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
                    { type: 'image', key: 'sonic', url: 'assets/sprites/sonic_havok_sanity.png' }
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
        this.add.image(0, 0, 'face').setOrigin(0);
        this.add.image(0, 0, 'sonic').setOrigin(0);
    }
}

const gameConfig = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(gameConfig);
