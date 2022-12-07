class Example extends Phaser.Scene
{
    dynamic = null;
    value = 0;

    preload ()
    {
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
        this.load.bitmapFont('desyrel-pink', 'assets/fonts/bitmap/desyrel-pink.png', 'assets/fonts/bitmap/desyrel-pink.xml');
        this.load.bitmapFont('shortStack', 'assets/fonts/bitmap/shortStack.png', 'assets/fonts/bitmap/shortStack.xml');
    }

    create ()
    {
        this.add.bitmapText(0, 0, 'desyrel', 'Lorem ipsum\ndolor sit amet');
        this.add.bitmapText(0, 200, 'desyrel-pink', 'Excepteur sint occaecat\ncupidatat non proident');
        this.add.bitmapText(0, 400, 'shortStack', 'Phaser BitmapText');

        this.dynamic = this.add.bitmapText(0, 500, 'desyrel', '');
    }

    update ()
    {
        this.dynamic.text = `value: ${this.value.toFixed(2)}`;
        this.value += 0.01;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
