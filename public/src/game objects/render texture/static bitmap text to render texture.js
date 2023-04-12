class Example extends Phaser.Scene
{
    bitmaptext;
    rt;

    preload ()
    {
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    }

    create ()
    {
        this.bitmaptext = this.add.bitmapText(0, 0, 'desyrel', 'PHASER 3\nRender Texture', 64);

        this.bitmaptext.setVisible(false);

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.bitmaptext, 300, 400);
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
