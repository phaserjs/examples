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

    this.on('shoot', handler1);
    this.once('shoot', handler2);
    this.on('shoot', handler3);
    this.on('shoot', handler4);
    this.on('shoot', handler5);
    this.once('shoot', handler6);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event
    //  Should call:
    //  handlers 1, 2, 3, 4, 6
    this.events.dispatch(playerEvent);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event again
    //  Should call:
    //  handlers 1, 3, 4
    this.events.dispatch(playerEvent);

}

function handler1(event) {

    console.log('Event Received by Handler One:', event);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event);

    //  Remove handler5 from the event dispatcher
    event.target.off('shoot', handler5);

}

function handler3(event) {

    console.log('Event Received by Handler Three:', event);

}

function handler4(event) {

    console.log('Event Received by Handler Four:', event);

}

//  Should never be called
function handler5(event) {

    console.log('Event Received by Handler Five:', event);

}

function handler6(event) {

    console.log('Event Received by Handler Six:', event);

}
