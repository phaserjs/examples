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

    this.load.multiatlas('megaset', 
        ['megasetHD-0.png', 'megasetHD-1.png', 'megasetHD-2.png', 'megasetHD-3.png'],
        ['megasetHD-0.json', 'megasetHD-1.json', 'megasetHD-2.json', 'megasetHD-3.json']
    );

}

function create() {

    //  This frame is in the 1st atlas file (set0/data0)
    this.add.image(0, 0, 'megaset', 'aya_touhou_teng_soldier');

    //  This frame is in the 2nd atlas file (set1/data1)
    this.add.image(180, 0, 'megaset', 'oz_pov_melting_disk');

    //  This frame is in the 3rd atlas file (set2/data2)
    this.add.image(240, 0, 'megaset', 'budbrain_chick');

    //  This frame is in the 4th atlas file (set3/data3)
    this.add.image(340, 0, 'megaset', 'shocktroopers_toy');

}
