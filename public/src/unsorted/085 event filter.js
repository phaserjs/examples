var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  We'll use the States own EventDispatch to listen for, and dispatch the events

    //  Here we create an Event Filter. Filters are passed ALL the events dispatched
    //  by a single EventDispatcher, no matter what type they have. They can then
    //  act upon the event as needed.

    this.events.filter(myFilterHandler);

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

    this.events.dispatch(event1);
    this.events.dispatch(event2);
    this.events.dispatch(event3);
    this.events.dispatch(event4);
    this.events.dispatch(event5);

}

function myFilterHandler(event) {

    console.log('Event Filter picked-up:', event.type);

    //  We'll stop the 'Oric' event from getting any further
    if (event.type === 'Oric')
    {
        console.log('Killed "Oric" event');
        event.stopPropagation();
    }

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
