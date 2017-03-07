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
    image.state.data.set('gold', 650);

    console.log(image.state.data.get('gold'));

    //  Sets a callback to be invoked any time the 'gold' data value
    //  is changed.
    //  
    //  If the callback returns a value, it will be used instead.
    //  If it doesn't return anything, the original value will be used.

    image.state.data.before('gold', checkGold, this);

    //  Trying to set the value again will invoke the 'before' callback
    image.state.data.set('gold', 2000);

    console.log(image.state.data.get('gold'));

}

function checkGold (gameObject, key, value) {

    if (value > 1000)
    {
        return 1000;
    }

}