var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var text1;
var text2;
var tween;
var progressBar;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 250, 'block').setAlpha(0.3);
    var image = this.add.image(100, 250, 'block');

    text1 = this.add.text(30, 20, '0', { font: '16px Courier', fill: '#00ff00' });
    text2 = this.add.text(400, 20, '0', { font: '16px Courier', fill: '#00ff00' });

    // tween = this.tweens.add({
    //     targets: image,
    //     props: {
    //         x: { value: 700, duration: 4000, ease: 'Power2' },
    //         y: { value: 500, duration: 1500, ease: 'Bounce.easeOut' }
    //     },
    //     loop: 2,
    //     loopDelay: 1000
    // });

    tween = this.tweens.add({
        targets: image,
        props: {
            x: { value: 700, duration: 4000, ease: 'Power2' },
            y: { value: 500, duration: 1500, ease: 'Bounce.easeOut' }
        }
    });

    console.log(tween);

    progressBar = document.createElement('input');
    progressBar.type = 'range';
    progressBar.min = '0';
    progressBar.max = '100';
    progressBar.step = '.001';
    progressBar.value = '50';
    document.body.appendChild(progressBar);

    progressBar.addEventListener('input', function (e) {

        tween.pause();

        tween.seek(e.target.value / 100);

        // tween.resume();

    });
}

function update ()
{
    //  Tween
    text1.setText([
        'Progress: ' + tween.progress,
        'Elapsed: ' + tween.elapsed,
        'Duration: ' + tween.duration,
        ' ',
        'Loops: ' + tween.loopCounter,
        'TProgress: ' + tween.totalProgress,
        'TElapsed: ' + tween.totalElapsed,
        'TDuration: ' + tween.totalDuration
    ]);

    //  TweenData
    text2.setText([
        'Progress A: ' + tween.data[0].progress,
        'Progress B: ' + tween.data[1].progress
    ]);

    if (tween.isPlaying())
    {
        progressBar.value = Math.floor(tween.progress * 100);
    }

}
