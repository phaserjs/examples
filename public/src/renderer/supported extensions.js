var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    this.add.text(10, 10, this.game.renderer.supportedExtensions, { font: '16px Courier', fill: '#00ff00' });

    console.log(this.game.renderer.instancedArraysExtension);
}
