const MyGame = {};

MyGame.Boot = function ()
{
    this.face = null;
};

MyGame.Boot.prototype.constructor = MyGame.Boot;

MyGame.Boot.prototype = {

    preload: function ()
    {
        this.load.image('face', 'assets/pics/bw-face.png');
    },

    create: function ()
    {
        this.face = this.add.image(400, 300, 'face');
    }

};

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame.Boot
};

const game = new Phaser.Game(config);
