var text;
var tween;

class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    create() {
        text = this.add.text(30, 20, '0', { font: '42px Courier', fill: '#00ff00' });

        //  A 'Counter' tween is a special type of tween which doesn't have a target.
        //  Instead it allows you to tween between 2 numeric values. The default values
        //  are 0 to 1, but can be set to anything. You can use the tweened value via
        //  `tween.getValue()` for the duration of the tween.

        tween = this.tweens.addCounter({
            from: 0,
            to: 100,
            duration: 5000,
            paused: true
        });

        this.input.once('pointerdown', () => {
            tween.resume();
        });
    }

    update() {
        text.setText([
            'Value: ' + tween.getValue(),
            'Progress: ' + tween.totalProgress,
            'Elapsed: ' + tween.totalElapsed,
            'Duration: ' + tween.totalDuration
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);