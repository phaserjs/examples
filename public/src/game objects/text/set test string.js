class Example extends Phaser.Scene
{
    create ()
    {
        this.add.text(100, 100, '⎝ example text', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#ffffff',
            backgroundColor: '#ff00ff',
            testString: 'abc'
        }).setStroke('#111111', 6);

        this.add.text(100, 200, '⎝ example text', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#ffffff',
            backgroundColor: '#ff00ff',
            testString: '⎝|MÉqgy'
        }).setStroke('#111111', 6);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#8E8E8E',
    scene: Example
};

const game = new Phaser.Game(config);
