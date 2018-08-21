var config = {
    type: Phaser.CANVAS,
    width: 400,
    height: 300,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
      this.load.image('myImage', 'assets/sprites/bunny.png');
}

function create ()
{
    var text1 = this.add.text(50, 20, "TEXT BEFORE IMAGE ", {fontFamily: 'Arial', fontSize: 30, color: '#FF0000'});
    var myImage = this.add.image(200, 150, 'myImage');
    myImage.alpha = 0.2;
    var text2 = this.add.text(50, 240, "TEXT AFTER IMAGE", {fontFamily: 'Arial', fontSize: 30, color: '#FF0000'});
    // text2 also becomes transparent even though its alpha value was never set
}