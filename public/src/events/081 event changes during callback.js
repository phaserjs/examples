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

    //  Here is an Event ...

    var playerEvent = new Phaser.Event('shoot');

    this.events.on('shoot', handler);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event
    this.events.dispatch(playerEvent);

    //  How many events are in the dispatcher now?
    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

}

function handler(event) {

    console.log('Event Received by Handler One:', event);

    //   And now we're going to add a new event to the same dispatcher
    //   but it won't process it until 'dispatch' is called again

    event.target.on('shoot', handler2);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event);

}
