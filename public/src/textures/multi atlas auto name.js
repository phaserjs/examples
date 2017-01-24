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

    this.load.path = 'assets/atlas/';

    //  The megaset is a multi-part texture atlas, split over 4 PNGs and 4 JSON files
    //  called megaset-0.png to megaset-3.png, and megaset-0.json to megaset-3.json
    //  
    //  The following will automatically load those, based on the key given.
    //  The number means load 0,1,2 and 3 files.

    this.load.multiatlas('megaset', 3);

}

function create() {

    //  This frame is in the 1st atlas file (set0/data0)
    this.add.image(0, 0, 'megaset', 'snake');

    //  This frame is in the 2nd atlas file (set1/data1)
    this.add.image(0, 100, 'megaset', 'nanoha-taiken-pink');

    //  This frame is in the 3rd atlas file (set2/data2)
    // this.add.image(0, 0, 'megaset', 'hello'); // trimmed
    this.add.image(300, 130, 'megaset', 'bunny'); // un-trimmed

    //  This frame is in the 4th atlas file (set3/data3)
    this.add.image(64, 300, 'megaset', 'contra3');

}
