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
        ['megaset-0.png', 'megaset-1.png', 'megaset-2.png', 'megaset-3.png'],
        ['megaset-0.json', 'megaset-1.json', 'megaset-2.json', 'megaset-3.json']
    );

}

function create() {

    //  This frame is in the 1st atlas file (set0/data0)
    this.add.image(0, 0, 'megaset', 'snake');

    //  This frame is in the 2nd atlas file (set1/data1)
    this.add.image(0, 0, 'megaset', 'nanoha-taiken-pink');

    //  This frame is in the 3rd atlas file (set2/data2)
    // this.add.image(0, 0, 'megaset', 'hello'); // trimmed
    this.add.image(0, 0, 'megaset', 'bunny'); // un-trimmed

    //  This frame is in the 4th atlas file (set3/data3)
    this.add.image(0, 0, 'megaset', 'contra3');

}
