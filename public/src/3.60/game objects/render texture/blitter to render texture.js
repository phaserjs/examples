class Example extends Phaser.Scene
{
    blitter;
    rt;

    preload ()
    {
        this.load.image('duck', 'assets/sprites/darkwing_crazy.png');
    }

    create ()
    {
        this.blitter = this.add.blitter(0, 0, 'duck').setVisible(false);

        for (let i = 0; i < 512; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.blitter.create(x, y);
        }

        this.rt = this.add.renderTexture(400, 300, 800, 600);
    }

    update ()
    {
        this.rt.camera.rotation -= 0.01;

        this.rt.clear();

        this.rt.draw(this.blitter, 0, 0);
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
