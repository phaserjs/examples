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

    image.state.data.set('name', 'Red GemStone');
    image.state.data.set('level', 2);
    image.state.data.set('value', 650);
    image.state.data.set('owner', 'Michael');

    console.log(image.state.data.get('name'));
    console.dir(image.state.data.getAll());

    image.state.data.pop('value');

    console.dir(image.state.data.getAll());

}
