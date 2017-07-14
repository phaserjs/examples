var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  We'll use the Scenes own EventDispatch to listen for, and dispatch the events

    //  Let's make some events ...

    var event1 = new Phaser.Event('Atari');
    var event2 = new Phaser.Event('Amiga');
    var event3 = new Phaser.Event('C64');
    var event4 = new Phaser.Event('Spectrum');
    var event5 = new Phaser.Event('Oric');

    this.events.on('Atari', handler1);
    this.events.on('Amiga', handler2);
    this.events.on('C64', handler3);
    this.events.on('Oric', handler4);
    this.events.on('Spectrum', handler5);

    //  And dispatch them all with one call:

    this.events.dispatch([ event1, event2, event3, event4, event5 ]);

}

function handler1(event) {

    console.log('Event Received by Handler One:', event.type);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event.type);

}

function handler3(event) {

    console.log('Event Received by Handler Three:', event.type);

}

function handler4(event) {

    console.log('Event Received by Handler Four:', event.type);

}

function handler5(event) {

    console.log('Event Received by Handler Five:', event.type);

}
