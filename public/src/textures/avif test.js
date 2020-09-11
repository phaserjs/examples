const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1024,
    height: 700,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('mechPNG', 'assets/pics/equality-by-ragnarok.png');
    this.load.image('mechAVIF', 'assets/pics/equality-by-ragnarok.avif');
}

function create ()
{
    const png = this.add.image(0, 0, 'mechPNG').setScale(0.54).setOrigin(0);
    const avif = this.add.image(0, 0, 'mechAVIF').setScale(0.54).setOrigin(0);

    this.add.text(32, 600, 'PNG - 2,953 KB');
    this.add.text(800, 600, 'AVIF - 135 KB');

    const debug = this.add.graphics();

    //  Default marker
    debug.fillStyle(0xffffff);
    debug.fillRect(511, 0, 3, 584);
    avif.setCrop(512 * (1 / png.scaleX), 0, 1920, 1080);

    this.input.on('pointermove', (pointer) => {

        debug.clear();
        debug.fillRect(pointer.x - 1, 0, 3, 584);

        avif.setCrop(pointer.x * (1 / png.scaleX), 0, 1920, 1080);

    });
}
