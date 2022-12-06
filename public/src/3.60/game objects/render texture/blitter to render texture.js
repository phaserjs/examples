class Example extends Phaser.Scene
{
    blitter;
    rt;

    preload ()
    {
        this.load.image('atari', 'assets/sprites/atari130xe.png');
    }

    create ()
    {
        this.blitter = this.add.blitter(0, 0, 'atari').setVisible(false);

        this.blitter.create(0, 0);

        this.rt = this.add.renderTexture(0, 0, 800, 600);
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
