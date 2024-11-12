let image;
let tween;
let text;

class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('makoto', 'assets/pics/makoto.png');
    }

    create() {
        image = this.add.image(400, 300, 'makoto');

        text = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        tween = this.tweens.add({
            targets: image,
            alpha: {
                from: 0,
                to: 1
            },
            delay: 2000,
            duration: 5000
        });

        /*
        tween = this.tweens.add({
            targets: image,
            alpha: {
                start: 0,
                to: 1
            },
            delay: 2000,
            duration: 6000
        });
        */

        /*
        tween = this.tweens.add({
            targets: image,
            alpha: {
                start: 0.1,
                from: 1,
                to: 0.1
            },
            delay: 2000,
            duration: 2000
        });
        */
    }

    update() {
        if (tween.data) this.debugTweenData(text, tween.data[0]);
    }

    debugTweenData(text, tweenData) {
        var output = [];

        var TDStates = [
            'CREATED',
            'INIT',
            'DELAY',
            'OFFSET_DELAY',
            'PENDING_RENDER',
            'PLAYING_FORWARD',
            'PLAYING_BACKWARD',
            'HOLD_DELAY',
            'REPEAT_DELAY',
            'COMPLETE'
        ];

        output.push(tweenData.key);
        output.push('--------');
        output.push('State: ' + TDStates[tweenData.state]);
        output.push('Start: ' + tweenData.start);
        output.push('Current: ' + tweenData.current);
        output.push('End: ' + tweenData.end);
        output.push('Progress: ' + tweenData.progress);
        output.push('Elapsed: ' + tweenData.elapsed);
        output.push('Duration: ' + tweenData.duration);
        output.push('Total Duration: ' + tweenData.totalDuration);
        output.push('Delay: ' + tweenData.delay);
        output.push('Yoyo: ' + tweenData.yoyo);
        output.push('Hold: ' + tweenData.hold);
        output.push('Repeat: ' + tweenData.repeat);
        output.push('Repeat Counter: ' + tweenData.repeatCounter);
        output.push('Repeat Delay: ' + tweenData.repeatDelay);

        text.setText(output);
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
