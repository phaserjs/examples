class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('uv', 'assets/pics/uv-grid-4096-ian-maclachlan.png');
    }

    create ()
    {
        this.add.image(2048, 2048, 'uv');

        this.cameras.main.setZoom(0.75);
        this.cameras.main.setScroll(2000, 1024);

        this.renderer.snapshotArea(0, 0, 256, 256, image => {

            document.body.appendChild(image);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: Example
};

const game = new Phaser.Game(config);
