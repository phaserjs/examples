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

    this.load.image('gem', 'assets/sprites/gem.png');

}

var image;

function create() {

    image = this.add.image(0, 0, 'gem');

    image.data.set('name', 'Red GemStone');
    image.data.set('level', 2);
    image.data.set('value', 650);
    image.data.set('owner', 'Michael');

    console.log(image.data.get('name'));
    console.dir(image.data.getAll());

    image.data.pop('value');

    console.dir(image.data.getAll());

}
