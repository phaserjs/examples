class Example extends Phaser.Scene
{
    create ()
    {
        //  Implicit values
        const textConfig = {
            x: 100,
            y: 100,
            text: 'Phaser 3\ntoJSON',
            style: {
                font: '64px Arial',
                fill: '#ffffff',
                align: 'center',
                backgroundColor: '#ff00ff'
            }
        };

        const text = this.make.text(textConfig);

        console.log(text.toJSON());
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
