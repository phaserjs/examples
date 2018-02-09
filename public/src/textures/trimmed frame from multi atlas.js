var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
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

    this.add.image(400, 300, 'megaset', 'hello');

}
