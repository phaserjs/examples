class Example extends Phaser.Scene
{
    preload() {
        this.load.bitmapFont('gothic', 'https://labs.phaser.io/assets/fonts/bitmap/gothic.png', 'https://labs.phaser.io/assets/fonts/bitmap/gothic.xml');
    }

    create() {
        this.graphics = this.add.graphics({ x: 0, y: 0, fillStyle: { color: 0xff00ff, alpha: 1 } });
        // Text
        this.text = this.add.text(100, 100, 'Hello Phaser', { fontFamily: 'Arial Black', fontSize: 32 });
        this.text.style.setWordWrapWidth(30);

        // Bitmap Text 
        const bitmapText = this.add.bitmapText(100, 400, 'gothic', 'Hello Phaser', 32);
        bitmapText.setMaxWidth(30);
        this.bounds2 = bitmapText.getTextBounds(true);
    }

    update ()
    {
        this.graphics.clear();

        this.graphics.lineStyle(1, 0xff0000, 1);
        this.graphics.strokeRectShape(this.text.getBounds());

        this.graphics.fillRect(this.bounds2.global.x, this.bounds2.global.y, this.bounds2.global.width, this.bounds2.global.height);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
