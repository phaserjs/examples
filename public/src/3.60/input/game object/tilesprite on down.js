class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mushroom', 'assets/sprites/mushroom2.png');
    }

    create ()
    {
        const image = this.add.tileSprite(200, 100, 512, 256, 'mushroom');

        image.setInteractive();

        image.setAngle(20);

        image.setOrigin(0);

        image.on('pointerdown', function ()
        {

            this.setTint(Math.random() * 16000000);

            //  So something happens for canvas
            this.x += 2;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
