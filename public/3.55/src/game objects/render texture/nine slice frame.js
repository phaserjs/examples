class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.setPath('assets/tests/9slice');
        this.load.image('topLeft', 'topLeft.png');
        this.load.image('top', 'top.png');
        this.load.image('topRight', 'topRight.png');
        this.load.image('botLeft', 'botLeft.png');
        this.load.image('bot', 'bot.png');
        this.load.image('botRight', 'botRight.png');
        this.load.image('left', 'left.png');
        this.load.image('right', 'right.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(50, 50, 512, 256);

        rt.nineSlice({
            topLeft: 'topLeft',
            topBackground: 'top',
            topRight: 'topRight',
            botLeft: 'botLeft',
            botBackground: 'bot',
            botRight: 'botRight',
            left: 'left',
            right: 'right'
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0x0567f9,
    scene: Example
};

const game = new Phaser.Game(config);
