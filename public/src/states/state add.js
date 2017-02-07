var MyGame = {};

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
        this.face = this.add.image(0, 0, 'face');
    }

};

var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600
};

var game = new Phaser.Game(config);

game.state.add('Boot', MyGame.Boot, true);
