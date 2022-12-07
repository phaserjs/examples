class Example extends Phaser.Scene
{
    text;
    key;

    create ()
    {
        this.key = this.input.keyboard.addKey('A');

        this.add.text(10, 10, 'Hold down the A Key', { font: '16px Courier', fill: '#00ff00' });

        this.text = this.add.text(10, 30, '', { font: '16px Courier', fill: '#00ff00' });
    }

    update ()
    {
        this.text.setText(`Duration: ${this.key.getDuration()}ms`);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
