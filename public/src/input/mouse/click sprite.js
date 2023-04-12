class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite.on('pointerdown', function (pointer)
        {

            this.setTint(0xff0000);

        });

        sprite.on('pointerout', function (pointer)
        {

            this.clearTint();

        });

        sprite.on('pointerup', function (pointer)
        {

            this.clearTint();

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
