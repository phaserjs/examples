var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  They get 1 second to press the next key in the combo, or it resets

    var combo = this.input.keyboard.createCombo('phaser', { maxKeyDelay: 1000 });

    this.input.keyboard.events.on('KEY_COMBO_MATCH_EVENT', function (event) {

        console.log('You typed phaser quickly!');

    });

}
