class Example extends Phaser.Scene
{
    c = 0;
    i = 0;

    content = [
        'The sky above the port was the color of television, tuned to a dead channel.',
        '`It\'s not like I\'m using,\' Case heard someone say, as he shouldered his way ',
        'through the crowd around the door of the Chat. `It\'s like my body\'s developed',
        'this massive drug deficiency.\' It was a Sprawl voice and a Sprawl joke.',
        'The Chatsubo was a bar for professional expatriates; you could drink there for',
        'a week and never hear two words in Japanese.',
        '',
        'Ratz was tending bar, his prosthetic arm jerking monotonously as he filled a tray',
        'of glasses with draft Kirin. He saw Case and smiled, his teeth a webwork of',
        'East European steel and brown decay. Case found a place at the bar, between the',
        'unlikely tan on one of Lonny Zone\'s whores and the crisp naval uniform of a tall',
        'African whose cheekbones were ridged with precise rows of tribal scars. `Wage was',
        'in here early, with two joeboys,\' Ratz said, shoving a draft across the bar with',
        'his good hand. `Maybe some business with you, Case?\'',
        '',
        'Case shrugged. The girl to his right giggled and nudged him.',
        'The bartender\'s smile widened. His ugliness was the stuff of legend. In an age of',
        'affordable beauty, there was something heraldic about his lack of it. The antique',
        'arm whined as he reached for another mug.',
        '',
        'From Neuromancer by William Gibson',
        ''
    ];

    line = this.content[0].split(' ');

    graphics;
    text3;
    text2;
    text1;

    create ()
    {
        this.text1 = this.add.text(100, 100, 'The');

        this.text2 = this.add.text(100, 200, 'The', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });

        this.text3 = this.add.text(100, 400, 'The', { fontFamily: 'Arial Black', fontSize: 74, color: '#c51b7d' });
        this.text3.setStroke('#de77ae', 16).setShadow(2, 2, '#333333', 2, true, true);

        this.graphics = this.add.graphics();

        this.time.addEvent({
            delay: 500, callback: function ()
            {

                const word = this.getWord();

                this.text1.setText(word);
                this.text2.setText(word);
                this.text3.setText(word);

            }, callbackScope: this, loop: true
        });
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xff0000, 1);

        this.graphics.strokeRectShape(this.text1.getBounds());
        this.graphics.strokeRectShape(this.text2.getBounds());
        this.graphics.strokeRectShape(this.text3.getBounds());
    }

    getWord ()
    {
        this.c++;

        if (this.c === this.line.length)
        {
            this.c = 0;

            this.i++;

            if (this.i === this.content.length)
            {
                this.i = 0;
            }

            this.line = this.content[this.i].split(' ');
        }

        return this.line[this.c];
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    backgroundColor: '#8d8d8d',
    scene: Example
};

const game = new Phaser.Game(config);
