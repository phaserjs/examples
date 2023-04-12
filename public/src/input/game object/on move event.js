class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite.on('pointermove', function (pointer)
        {

            this.setTint(Math.random() * 16000000);

        });
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
