class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('chick', 'assets/sprites/budbrain_chick.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'chick').setScale(3);

        const shape = new Phaser.Geom.Ellipse(33, 67, 66, 133);

        sprite.setInteractive(shape, Phaser.Geom.Ellipse.Contains);

        //  Input Event listeners

        sprite.on('pointerover', () =>
        {

            sprite.setTint(0x7878ff);

        });

        sprite.on('pointerout', () =>
        {

            sprite.clearTint();

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    pixelArt: true,
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
