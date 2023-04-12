class Example extends Phaser.Scene
{
    preload ()
    {
        //  The URLs are incorrect on purpose to test 404 handling
        this.load.image('taikodrummaster', 'assets/tribbles/taikodrummaster.jpg');
        this.load.image('sukasuka-chtholly', 'assets/tribbles/sukasuka-chtholly.png');
    }

    create ()
    {
        this.add.image(400, 300, 'taikodrummaster');
        this.add.image(400, 500, 'sukasuka-chtholly');

        this.add.text(10, 10, 'Load complete, both files 404d', { font: '16px Courier', fill: '#00ff00' });
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
