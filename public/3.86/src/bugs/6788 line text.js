class Example extends Phaser.Scene
{
    create ()
    {
        this.add.line(100, 100, 100, 100, 400, 300, 0x00ff00);
        
        this.add.text(100, 100, 'Hello World', { fontFamily: 'Arial', fontSize: 32, color: '#00ff00' });

        this.add.line(400, 300, 100, 100, -200, 150, 0x00ff00);
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
