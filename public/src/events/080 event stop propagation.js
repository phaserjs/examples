var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create() {

    //  Here is an Event ...

    var playerEvent = new Phaser.Event('shoot');

    //  And here are 2 listeners.
    //  The second listener has a higher priority than the first, so will be called first.

    //  We'll use the Scenes own EventDispatch to listen for, and dispatch the events
    this.events.on('shoot', handler1, 5);
    this.events.on('shoot', handler2, 10);

    //  Dispatch the event
    this.events.dispatch(playerEvent);

}

function handler1(event) {

    console.log('Event Received by Handler One:', event);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event);

    //  This stops the event getting any further, so handler1 will never fire

    event.stopPropagation();

}
