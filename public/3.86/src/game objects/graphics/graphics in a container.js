class Example extends Phaser.Scene
{
    create ()
    {
        const container = this.add.container(200, 200);

        const graphics = this.add.graphics();

        container.add(graphics);

        graphics.fillStyle(0xffff00, 1);

        //  Remember that the coordinates given here are now relative to those
        //  of the Container, not the screen
        graphics.fillRoundedRect(0, 0, 100, 100, 32);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
