class Example extends Phaser.Scene
{
    rt2;
    rt1;

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('grid', 'assets/sprites/128x128-v2.png');
    }

    create ()
    {
        const gridFrame = this.textures.getFrame('grid');
        const gridImage = this.add.image(0, 0, 'grid').setVisible(false).setOrigin(0);

        this.rt1 = this.add.renderTexture(0, 0, 800, 600);
        this.rt1.draw(gridFrame, 0, 0);
        this.rt1.draw(gridImage, 128, 0);
        this.rt1.draw(gridFrame, 256, 0);

        // rt2 = this.add.renderTexture(200, 200, 800, 600);
        // rt2.draw(bob, 200, 200);
        // rt2.draw(rt2, 0, 0);
    }

    update ()
    {
        // rt.camera.rotation -= 0.01;
        // rt.clear();
        // rt.draw(graphics, 0, 0);
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
