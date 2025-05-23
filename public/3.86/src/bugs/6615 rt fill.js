class Example extends Phaser.Scene
{
    create ()
    {
        const rt = this.add.renderTexture(0, 0, 200, 200).setOrigin(0);

        rt.fill(0x00ff00, 1, 0, 0, 200, 200);

        rt.fill(0xff0000, 1, 0, 0, 50, 50);

        this.add.rectangle(0, 200, 200, 200, 0xffff00).setOrigin(0);

        // rt.drawFrame('mushroom',undefined, 0, 0, 1, 0xff0000)
    }

}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
