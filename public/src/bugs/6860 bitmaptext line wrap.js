const text = `
the end is never | the end is never | the end is never A 
the end is never | the end is never | the end is never B
the end is never | the end is never | the end is never C
the end is never | the end is never | the end is never D`

const text2 = `first line overlaps with itself 
 second line ends with a space
third line not wrapped as it should be`

const text3 = `first line overlaps with itself
second line ends with a space \n sssssssssssssssssssssssssssssssssssssssssssssssss
third line not wrapped as it should be`;

class Example extends Phaser.Scene {
    preload() {
        this.load.bitmapFont('shortStack', 'assets/fonts/bitmap/shortStack.png', 'assets/fonts/bitmap/shortStack.xml');
        this.load.bitmapFont("atari", "assets/fonts/bitmap/atari-smooth.png", "assets/fonts/bitmap/atari-smooth.xml");
    }

    create() {
        this.add.bitmapText(0, 300, 'shortStack', text, 16).setMaxWidth(400);
        this.add.bitmapText(50, 50, 'atari', text3, 20).setMaxWidth(300);

        const rect = this.add.rectangle(50, 50, 300, 200).setOrigin(0);
        rect.setStrokeStyle(2, 0x1a65ac);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
};

const game = new Phaser.Game(config);
