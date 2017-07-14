var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var text1 = this.add.text(100, 100, 'Phaser Text with Tint');

    text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

    var text2 = this.add.text(100, 200, 'Phaser Text with Tint', { font: '64px Arial' });

    text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
}
