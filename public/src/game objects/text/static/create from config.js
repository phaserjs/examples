var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
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
        text: 'Text\nGame Object\nCreated from config',
        style: {
            fontSize: '64px',
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
            backgroundColor: '#ff00ff'
        }
    };

    this.make.text(config1);
}
