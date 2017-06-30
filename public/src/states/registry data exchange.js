var StateA = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateA ()
    {
        Phaser.State.call(this, { key: 'stateA' });

        this.score = 0;
    },

    create: function ()
    {
        //  Store the score in the Registry
        this.registry.set('score', this.score);

        //  Update the score every 500ms
        this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
    },

    onEvent: function ()
    {
        this.score++;

        this.registry.set('score', this.score);
    }

});

var StateB = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function StateB ()
    {
        Phaser.State.call(this, { key: 'stateB', active: true });

        this.text;
    },

    create: function ()
    {
        this.text = this.add.text(100, 100, 'Monitoring Registry');

        //  Check the Registry and hit our callback every time the 'score' value is updated
        this.registry.after('score', this.updateScore, this);
    },

    updateScore: function (parent, key, data)
    {
        this.text.setText('Score: ' + data);
    }

});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: [ StateA, StateB ]
};

var game = new Phaser.Game(config);
