var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        create: create,
    }
};

var game = new Phaser.Game(config);

function create() 
{
    //  Implicit values
    var config1 = {
        x: 100,
        y: 100,
        padding: 0,
        _text: '|MÉq',
        text: 'ZHASeg',
        style: {
            font: '48px Zapfino',
            fill: '#ffffff',
            align: 'center',
            backgroundColor: '#ff00ff'
        }
    };

    this.make.text(config1);
}
