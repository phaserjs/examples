class Example extends Phaser.Scene
{
    constructor ()
    {
        super({
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/3.8.95/SpinePluginDebug.js', sceneKey: 'spine' }
                ]
            }
        })
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.setPath('assets/spine/3.8/coin/');
        this.load.spine('coin', 'coin-pro.json', 'coin-pro.atlas');
    }

    create ()
    {
        const coin = this.add.spine(400, 200, 'coin', 'animation', true);

        //  Resize the Spine dimensions because the original skeleton includes the shine bone,
        //  rendering a simple bounds check useless. Not all Spine objects will require this, but this one does.
        coin.setSize(280, 280);

        this.physics.add.existing(coin);

        coin.body.setOffset(0, 50);
        coin.body.setVelocity(100, 200);
        coin.body.setBounce(1, 1);
        coin.body.setCollideWorldBounds(true);

        //  Otherwise it's massive :)
        coin.setScale(0.3);
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#cdcdcd',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
