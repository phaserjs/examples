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
        this.load.setPath('assets/spine/3.8/coin');

        this.load.spine('coin', 'coin-pro.json', 'coin-pro.atlas');
    }

    create ()
    {
        var b = this.add.spine(400, 300, 'coin', 'animation', true);
    }
}

// Create Game
let game;
const makeGame = () =>
{
    const config = {
        type: Phaser.WEBGL,
        parent: 'phaser-example',
        width: 800,
        height: 600,
        backgroundColor: '#cdcdcd',
        scene: Example
    };

    return new Phaser.Game(config);
}

// Destroy game
const b = document.createElement('button');
b.innerText = 'Nuke';
document.body.appendChild(b);

b.onclick = function () {

    game.destroy(true, false);

};

const b2 = document.createElement('button');
b2.innerText = 'Create';
document.body.appendChild(b2);

b2.onclick = () => {
    game = makeGame();
}

game = makeGame();
