var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create,
        update: update
    }
};

var graphics;
var text;

var game = new Phaser.Game(config);

function create ()
{
    graphics = this.add.graphics();

    //  We need an extra pointer, as we only get 1 by default
    this.input.addPointer();
    this.input.addPointer();
    this.input.addPointer();

    text = this.add.text(10, 10, 'Touch input v6', { font: '16px Courier', fill: '#00ff00' });
}

function update ()
{
    graphics.clear();

    if (this.input.pointer1.isDown)
    {
        graphics.fillStyle(0xff0000, 1);
        graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 64, 64);
        text.setText('pointer1');
    }

    if (this.input.pointer2.isDown)
    {
        graphics.fillStyle(0x00ff00, 1);
        graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 64, 64);
        text.setText('pointer2');
    }
}
