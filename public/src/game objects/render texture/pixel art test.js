class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('mushroom', 'assets/sprites/mushroom16x16.png');
    }

    create ()
    {
        const rt = this.add.renderTexture(0, 0, 800, 600).setOrigin(0);

        const mushroom = this.add.image(200, 300, 'mushroom').setScale(16);

        rt.draw(mushroom, 400, 0).render();
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
