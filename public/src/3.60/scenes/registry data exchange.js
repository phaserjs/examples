class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });

        this.score = 0;
    }

    create ()
    {
        //  Store the score in the Registry
        this.registry.set('score', this.score);

        //  Update the score every 500ms
        this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
    }

    onEvent ()
    {
        this.score++;

        this.registry.set('score', this.score);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB', active: true });

        this.text;
    }

    create ()
    {
        this.text = this.add.text(100, 100, 'Monitoring Registry');

        //  Check the Registry and hit our callback every time the 'score' value is updated
        this.registry.events.on('changedata', this.updateScore, this);
    }

    updateScore (parent, key, data)
    {
        this.text.setText(`Score: ${data}`);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB ]
};

const game = new Phaser.Game(config);
