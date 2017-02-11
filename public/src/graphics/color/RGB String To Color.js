
var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    var color1 = Phaser.Graphics.Color.RGBStringToColor('rgb(255, 155, 55)');

    console.log(color1);

    var color2 = Phaser.Graphics.Color.RGBStringToColor('rgba(255, 155, 55, 0.5)');

    console.log(color2);

    var color3 = Phaser.Graphics.Color.RGBStringToColor('rgba(345, 50, 100, 2.5)');

    console.log(color3);

    var color4 = Phaser.Graphics.Color.RGBStringToColor('rgb(50, -50, 50)');

    console.log(color4);

    var color5 = Phaser.Graphics.Color.RGBStringToColor('RGB(255, 0, 255)');

    console.log(color5);

}
