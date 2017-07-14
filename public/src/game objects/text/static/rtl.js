var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        create: create,
    }
};

var game = new Phaser.Game(config);

function create() 
{
    // Simple Sentence with punctuation.
    var str1 = "این یک آزمایش است.";

    ctx.fillText("این یک آزمایش است.", 0, 100);

    // Few sentences with punctuation and numerals. 
    var str2 = "۱ آزمایش. 2 آزمایش، سه آزمایش & Foo آزمایش!";

    // Needs implicit bidi marks to display correctly.
    var str3 = "آزمایش برای Foo Ltd. و Bar Inc. باشد که آزموده شود.";

    // Implicit bidi marks added; "Foo Ltd.&lrm; و Bar Inc.&lrm;"
    var str4 = "آزمایش برای Foo Ltd.‎ و Bar Inc.‎ باشد که آزموده شود.";

    this.add.text(64, 100, str1, { font: '32px Arial', rtl: true });
    this.add.text(64, 200, str1, { font: '32px Arial', rtl: false });
    this.add.text(64, 300, str3, { font: '32px Arial', rtl: true });
    this.add.text(64, 400, str4, { font: '32px Arial', rtl: true });
}
