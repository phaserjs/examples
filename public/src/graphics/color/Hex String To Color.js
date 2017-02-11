
var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    var color1 = Phaser.Graphics.Color.HexStringToColor('#ff00ff');

    console.log(color1);

    var color2 = Phaser.Graphics.Color.HexStringToColor('#0155dd');

    console.log(color2);

    var color3 = Phaser.Graphics.Color.HexStringToColor('#03f');

    console.log(color3);

    var color4 = Phaser.Graphics.Color.HexStringToColor('#FFAAEE');

    console.log(color4);

}
