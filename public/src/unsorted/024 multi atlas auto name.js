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

    //  The megasetHD is a multi-part texture atlas, split over 4 PNGs and 4 JSON files
    //  called megasetHD-0.png to megasetHD-3.png, and megasetHD-0.json to megasetHD-3.json
    //  
    //  The following will automatically load those, based on the key given.
    //  The number means load 0,1,2 and 3 files.

    this.load.multiatlas('megasetHD', 3);

}

function create() {

    //  This frame is in the 1st atlas file (set0/data0)
    this.add.image(0, 0, 'megasetHD', 'aya_touhou_teng_soldier');
    this.add.image(0, 400, 'megasetHD', 'atari800');
    this.add.image(500, 0, 'megasetHD', 'beball1');

    //  This frame is in the 2nd atlas file (set1/data1)
    this.add.image(180, 0, 'megasetHD', 'oz_pov_melting_disk');

    //  This frame is in the 3rd atlas file (set2/data2)
    this.add.image(240, 0, 'megasetHD', 'budbrain_chick');

    //  This frame is in the 4th atlas file (set3/data3)
    this.add.image(340, 0, 'megasetHD', 'shocktroopers_toy');

}
