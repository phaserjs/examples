class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'eye').setInteractive({ cursor: 'pointer' });

        sprite.on('pointerover', function (event)
        {

            this.setTint(0xff0000);

        });

        sprite.on('pointerout', function (event)
        {

            this.clearTint();

        });
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
