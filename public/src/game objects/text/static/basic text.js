var config = {
    type: Phaser.CANVAS,
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
    //  Default text with no style settings set
    var text = this.add.text(100, 100, 'Phaser');

    //  Pass in a styles with the constructor
    var text2 = this.add.text(100, 200, 'Phaser', { font: '64px Arial', fill: '#00ff00' });

    //  Or chain it like this:
    var text3 = this.add.text(100, 300, 'Phaser').setFont('64px Arial').setFill('#ffff00');
}
