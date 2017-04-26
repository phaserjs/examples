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
    var config1 = {
        x: 64,
        y: 100,
        padding: { x: 16, y: 32 },
        text: 'Phaser III',
        style: {
            font: '48px Arial',
            fill: '#ffffff',
            backgroundColor: '#ff00ff'
        }
    };

    this.make.text(config1);

    var config2 = {
        x: 400,
        y: 100,
        padding: { x: 64, y: 8 },
        text: 'Phaser III',
        style: {
            font: '48px Arial',
            fill: '#ffffff',
            backgroundColor: '#ff00ff'
        }
    };

    this.make.text(config2);
}
