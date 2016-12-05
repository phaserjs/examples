var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    state: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  Here is an Event ...

    var playerEvent = new Phaser.Event('shoot');

    //  And here are 3 listeners.

    //  The numbers are the priority IDs. The higher, the earlier they receive the event.
    //  Given the following values the handlers will be called in the order: 2, 3 and then 1.

    this.events.on('shoot', handler1, 0);
    this.events.on('shoot', handler2, 5);
    this.events.on('shoot', handler3, 2);

    //  We'll use the States own EventDispatch to listen for, and dispatch the events
    //  Dispatch the event
    this.events.dispatch(playerEvent);

}

function handler1(event) {

    console.log('Event Received by Handler One:', event);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event);

}

function handler3(event) {

    console.log('Event Received by Handler Three:', event);

}
