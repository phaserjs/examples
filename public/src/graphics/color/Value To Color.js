
var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  All should equal Color 255, 238, 221 (alpha 255)

    var color1 = Phaser.Graphics.Color.ValueToColor(0xffeedd);

    console.log(color1);

    var color2 = Phaser.Graphics.Color.ValueToColor('#ffeedd');

    console.log(color2);

    var color3 = Phaser.Graphics.Color.ValueToColor('#fed');

    console.log(color3);

    var color4 = Phaser.Graphics.Color.ValueToColor('rgb(255, 238, 221)');

    console.log(color4);

}
