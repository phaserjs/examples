var config = {
    key: 'test',
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        init: init,
        preload: preload,
        create: create,
        extend: {
            data: {
                lives: 3,
                score: 0
            }
        }
    }
};

var game = new Phaser.Game(config);

function init (data)
{
    console.log(data);
}

function preload ()
{
    this.load.image('mech', 'assets/pics/titan-mech.png');
}

function create ()
{
    console.log(this.data.lives);
}

game.scene.start('test', { wibble: 456 });
