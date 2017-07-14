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

    //  Here is an Event ...

    var playerEvent = new Phaser.Event('shoot');

    this.events.once('shoot', handler);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event
    this.events.dispatch(playerEvent);

    //  How many events are in the dispatcher now?
    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Does nothing
    this.events.dispatch(playerEvent);

}

function handler(event) {

    console.log('Event Received by Handler One:', event);

}
