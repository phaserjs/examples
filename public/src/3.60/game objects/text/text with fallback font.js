class Example extends Phaser.Scene
{
    create ()
    {
        this.add.text(100, 100, 'Hello World', { fontFamily: 'Verdana, "Times New Roman", Tahoma, serif', fontSize: 64, color: '#ffffff' });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
