var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create,
    }
};

var game = new Phaser.Game(config);

function create() 
{
    var text = this.add.text(0, 0, 'Phaser');

    var text2 = this.add.text(0, 64, 'Phaser', { font: '64px Arial', fill: '#00ff00' });

    var text3 = this.add.text(0, 128, 'Phaser', { font: 'bold 64px Arial', fill: false, stroke: '#00ff00', strokeThickness: 2 });
}
