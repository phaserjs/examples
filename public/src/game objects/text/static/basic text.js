var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        create: create,
    }
};

var game = new Phaser.Game(config);

function create() 
{
    //  Default text with no style settings set
    this.add.text(100, 100, 'Phaser');

    //  Pass in a styles with the constructor
    this.add.text(100, 200, 'Phaser', { font: '64px Arial', fill: '#00ff00' });

    //  Or chain it like this:
    this.add.text(100, 300, 'Phaser').setFont('64px Arial').setFill('#ffff00');
}
