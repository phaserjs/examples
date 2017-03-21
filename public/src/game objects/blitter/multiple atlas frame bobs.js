var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');

}

function create() {

    var blitter = this.add.blitter(0, 0, 'atlas');

    //  Create some bobs, all using different frames from the same atlas texture

    blitter.create(0, 0, 'atari400');
    blitter.create(100, 0, 'bunny').flipX = true;
    blitter.create(200, 0, 'cokecan');
    blitter.create(300, 0, 'copy-that-floppy');
    blitter.create(400, 0, 'hotdog');

}
