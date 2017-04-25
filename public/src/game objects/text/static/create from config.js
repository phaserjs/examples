var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        create: create,
    }
};

var text;
var game = new Phaser.Game(config);

function create() 
{
    //  Implicit values
    var config1 = {
        x: 100,
        y: 100,
        text: 'Phaser 3\nCreate from config',
        style: {
            font: '64px Arial',
            fill: '#ffffff',
            align: 'center',
            backgroundColor: '#ff00ff'
        }
    };

    this.make.text(config1);
}
