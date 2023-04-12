class Example extends Phaser.Scene
{
    text;
    rt;

    create ()
    {
        this.text = this.add.text(0, 0, 'Hello from a\nRender Texture').setFontSize(48);

        this.text.setVisible(false);

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.text, 400, 300);
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
