class Example extends Phaser.Scene
{
    create ()
    {
        const t = this.textures.addDynamicTexture('area1', 128, 128).fill(0x00ff00);

        console.log(t);

        this.add.image(100, 100, 'area1').setOrigin(0);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
