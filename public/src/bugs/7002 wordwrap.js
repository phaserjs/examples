class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
    }

    create ()
    {
        const longString = 'This is very long text that should wrap to another line but when letter spacing is applied, the wrapping doesn\'t get adjusted.';
        const style = {
            align: 'center',
            color: '#ffffff',
            wordWrap: {
                width: 250
            }
        };

        // add a rect behind the text to show where the bounds should be
        const rect = this.add.rectangle(this.scale.width / 4, this.scale.height / 4, 250, 250, 0xffffff, 0).setStrokeStyle(2, 0xff0000);
        this.text = this.add.text(rect.x, rect.y, longString, style).setOrigin(0.5);
        rect.setSize(250, this.text.height);

        // add a rect behind the text to show where the bounds should be
        const rectForLetterSpacing = this.add.rectangle(this.scale.width / 4 * 3, this.scale.height / 4, 250, 250, 0xffffff, 0).setStrokeStyle(2, 0xff0000);
        this.textWithLetterSpacing = this.add.text(rectForLetterSpacing.x, rectForLetterSpacing.y, longString, style).setOrigin(0.5)
            .setLetterSpacing(10); // note: letter spacing is missing from the style config
        rectForLetterSpacing.setSize(250, this.textWithLetterSpacing.height);

        // add a rect behind the text to show where the bounds should be
        const rectForLetterSpacingNeg = this.add.rectangle(this.scale.width / 4, this.scale.height / 4 * 3, 250, 250, 0xffffff, 0).setStrokeStyle(2, 0xff0000);
        this.textWithLetterSpacingNeg = this.add.text(rectForLetterSpacingNeg.x, rectForLetterSpacingNeg.y, longString, style).setOrigin(0.5)
            .setLetterSpacing(-2); // note: letter spacing is missing from the style config
        rectForLetterSpacingNeg.setSize(250, this.textWithLetterSpacingNeg.height);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
