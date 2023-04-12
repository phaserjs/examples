class Example extends Phaser.Scene
{
    create ()
    {
        const rt = this.add.renderTexture(400, 300, 800, 600);

        const circle = this.add.circle(200, 200, 120, 0x6666ff).setVisible(false);
        const rect = this.add.rectangle(0, 0, 300, 64, 0xff0000).setVisible(false);

        rt.draw(circle, 300, 300);
        rt.draw(rect, 500, 300);
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
