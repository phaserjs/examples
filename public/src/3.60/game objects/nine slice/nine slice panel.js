class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/ui/nine-slice.png', 'assets/ui/nine-slice.json');
    }

    create ()
    {
        const panel = this.add.nineslice(400, 300, 'ui', 'PopupBackground400', 500, 400, 160, 160, 100, 100);

        const content = [
            'The sky above the port was the color of television, tuned to a dead channel.',
            '`It\'s not like I\'m using,\' Case heard someone say, as he shouldered his way ',
            'through the crowd around the door of the Chat. `It\'s like my body\'s developed',
            'this massive drug deficiency.\' It was a Sprawl voice and a Sprawl joke.',
            'The Chatsubo was a bar for professional expatriates; you could drink there for',
            'a week and never hear two words in Japanese.',
        ];

        const text = this.add.text(400, 300, content, '25px Arial');

        text.setOrigin(0.5, 0.5);
        text.setWordWrapWidth(300);

        this.tweens.add({
            targets: panel,
            width: 800,
            height: 500,
            duration: 6000,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1,
            onUpdate: () => {
                text.setWordWrapWidth(panel.width - 100);
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#7b0046',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
