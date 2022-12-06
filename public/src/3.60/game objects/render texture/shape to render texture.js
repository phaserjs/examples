class Example extends Phaser.Scene
{
    create ()
    {
        const rt = this.add.renderTexture(0, 0, 800, 600);

        const circle = this.add.circle(200, 200, 80, 0x6666ff);

        // var rect = this.add.rectangle(0, 0, 100, 100, 0xff0000);

        rt.draw(circle, 300, 300);
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
