class Example extends Phaser.Scene
{
    dynamic = null;
    value = 0;

    preload ()
    {
        this.load.pack('pack', 'assets/loader-tests/pack6.json');
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
