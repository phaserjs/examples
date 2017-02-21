var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

//  37 = LEFT
//  38 = UP
//  39 = RIGHT
//  40 = DOWN

// let combo = KeyCombo([ 38, 38, 38, 40, 40, 40, 37, 37, 37, 39, 39, 39 ], { maxKeyDelay: 1000 });

//  They get 1 second to press the next key in the combo or it resets



    var combo = this.input.keyboard.createCombo([ 38, 38, 38, 40, 40, 40, 37, 37, 37, 39, 39, 39 ], { resetOnMatch: true });

    this.input.keyboard.events.on('KEY_COMBO_MATCH_EVENT', function (event) {

        console.log('Konami Code entered!');

    });

}
