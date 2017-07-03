var demo = new Phaser.State('Demo');

demo.preload = function ()
{
    this.load.image('face', 'assets/pics/bw-face.png');
}

demo.create = function ()
{
    this.add.image(400, 300, 'face');
}

var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    state: demo
};

var game = new Phaser.Game(config);
