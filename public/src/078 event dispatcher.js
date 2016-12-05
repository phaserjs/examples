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

    //  We'll use the States own EventDispatch to listen for, and dispatch the events

    //  And here is listener

    this.events.on('shoot', handler);

    //  Dispatch the event
    this.events.dispatch(playerEvent);

}

function handler(event) {

    console.log('Event Received by Handler:', event);

}
