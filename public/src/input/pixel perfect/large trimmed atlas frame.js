class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'atlas', 'hello').setInteractive({ pixelPerfect: true });

        sprite.on('pointerover', function ()
        {

            this.setTint(0xff0000);

        });

        sprite.on('pointerout', function ()
        {

            this.setTint();

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    scene: Example
};

const game = new Phaser.Game(config);
