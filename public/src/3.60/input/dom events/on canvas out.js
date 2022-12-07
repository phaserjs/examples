class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('sao', 'assets/pics/sword-art-online.jpg');
    }

    create ()
    {
        this.add.sprite(400, 300, 'sao');

        const graphics = this.add.graphics();

        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRect(0, 0, 800, 600);
        graphics.setVisible(false);

        const text = this.add.text(0, 0, 'Move the mouse out and over the game canvas');

        this.input.on('gameout', () =>
        {

            graphics.setVisible(true);

        });

        this.input.on('gameover', () =>
        {

            graphics.setVisible(false);

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
