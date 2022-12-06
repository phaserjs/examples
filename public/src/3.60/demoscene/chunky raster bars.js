class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('raster', 'assets/demoscene/raster-bw-64.png');
    }

    create ()
    {
        const group = this.add.group();

        group.createMultiple({ key: 'raster', repeat: 8 });

        let ci = 0;
        const colors = [ 0xef658c, 0xff9a52, 0xffdf00, 0x31ef8c, 0x21dfff, 0x31aade, 0x5275de, 0x9c55ad, 0xbd208c ];

        const _this = this;

        group.children.iterate(child =>
        {

            child.x = 100;
            child.y = 300;
            child.depth = 9 - ci;

            child.tint = colors[ci];

            ci++;

            _this.tweens.add({
                targets: child,
                x: 700,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut',
                duration: 1500,
                delay: 100 * ci
            });

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
