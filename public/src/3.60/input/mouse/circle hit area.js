class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'ball').setScale(2);

        //  The circle x/y relates to the top-left of the sprite.
        //  So if you want the circle positioned in the middle then you need to offset it by half the sprite width/height:
        const shape = new Phaser.Geom.Circle(46, 45, 45);

        sprite.setInteractive(shape, Phaser.Geom.Circle.Contains);

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
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
