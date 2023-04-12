class Example extends Phaser.Scene
{
    sprite;

    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.sprite = this.add.sprite(400, 300, 'eye');

        this.sprite.setInteractive();

        this.sprite.on('pointerdown', function ()
        {

            this.setTint(0xff0000);

        });

        this.sprite.on('pointerup', function ()
        {

            this.clearTint();

        });

        /*
        this.input.on('gameobjectover', function (pointer, gameObject) {

            gameObject.setTint(0xff0000);

        });

        this.input.on('gameobjectout', function (pointer, gameObject) {

            gameObject.clearTint();

        });
        */
    }

    update ()
    {
        this.sprite.rotation += 0.01;
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
