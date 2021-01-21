class Example extends Phaser.Scene
{
    create ()
    {
        let graphics = this.make.graphics().fillStyle(0x00ff00).fillRect(0, 0, 800, 100);

        graphics.generateTexture('hudbar', 800, 100);

        graphics.destroy();

        this.add.image(400, 300, 'hudbar');
    }
}


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: [ Example ]
};

const game = new Phaser.Game(config);
