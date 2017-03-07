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
    image.state.data.set('value_armor', true);
    image.state.data.set('armor_head', 50);
    image.state.data.set('armor_body', 250);
    image.state.data.set('armor_feet', 15);

    //  Query lets you run a regular expression against the keys,
    //  and get an object back with them all in.
    //  Here we're checking for keys matching 'armor' at the start
    console.log(image.state.data.query(/^armor/));

}
