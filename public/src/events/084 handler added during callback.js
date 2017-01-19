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

    this.events.on('shoot', handler1, 100);
    this.events.on('shoot', handler2, 90);
    this.events.on('shoot', handler3, 80);
    this.events.on('shoot', handler4, 70);
    this.events.on('shoot', handler5, 60);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event
    //  Should call:
    //  handlers 1, 2, 3, 4, 5, 6
    this.events.dispatch(playerEvent);

    console.log('There are', this.events.total('shoot'), 'shoot event listeners');

    //  Dispatch the event again
    //  Should call:
    //  handlers 1, 3, 4
    // this.events.dispatch(playerEvent);

}

function handler1(event) {

    console.log('Event Received by Handler One:', event);

}

function handler2(event) {

    console.log('Event Received by Handler Two:', event);

    //  Added handler6 to the event dispatcher with a high priority
    //  (gets inserted at the top of the array, so is skipped by this point)

    //  A PID lower than handler2, but higher than handler3
    // event.target.on('shoot', handler6, 85);
    event.target.on('shoot', handler6, 95);

    //  Remove handler5
    event.target.off('shoot', handler2);

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
