class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const str1 = "این یک آزمایش است.";

        // Few sentences with punctuation and numerals.
        const str2 = "۱ آزمایش. 2 آزمایش، سه آزمایش & Foo آزمایش!";

        // Needs implicit bidi marks to display correctly.
        const str3 = "آزمایش برای Foo Ltd. و Bar Inc. باشد که آزموده شود.";

        // Implicit bidi marks added; "Foo Ltd.&lrm; و Bar Inc.&lrm;"
        const str4 = "آزمایش برای Foo Ltd.‎ و Bar Inc.‎ باشد که آزموده شود.";

        this.add.text(10, 10, 'Normal?!');

        const t1 = this.add.text(700, 100, str1, { fontFamily: 'Arial', fontSize: 32, color: '#000000', rtl: true });
        this.add.text(700, 200, str2, { fontFamily: 'Arial', fontSize: 32, color: '#000000', rtl: true });
        this.add.text(700, 300, str3, { fontFamily: 'Arial', fontSize: 32, color: '#000000', rtl: true });
        this.add.text(700, 400, str4, { fontFamily: 'Arial', fontSize: 32, color: '#000000', rtl: true });

        let i = 0;

        this.input.on('pointerdown', () => {

            i++;

            t1.setText(`${str1} ${i}`);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#efefef',
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
