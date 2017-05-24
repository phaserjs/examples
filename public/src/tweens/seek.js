var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var text;
var tween;
var progressBar;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    var marker = this.add.image(100, 200, 'block').setAlpha(0.3);
    var image = this.add.image(100, 200, 'block');

    text = this.add.text(100, 100, '0', { font: '32px Arial', fill: '#00ff00' });

    tween = this.tweens.add({
        targets: image,
        props: {
            x: { value: 700, duration: 4000, ease: 'Power2' },
            y: { value: 400, duration: 1500, ease: 'Bounce.easeOut' }
        }
    });

    // tween = this.tweens.add({
    //     targets: image,
    //     x: 700,
    //     duration: 3000,
    //     ease: 'Power2'
    // });

    console.log(tween);

    progressBar = document.createElement('input');
    progressBar.type = 'range';
    progressBar.min = '0';
    progressBar.max = '100';
    progressBar.step = '.001';
    progressBar.value = '0';
    document.body.appendChild(progressBar);

    progressBar.addEventListener('input', function (e) {

        tween.seek(e.target.value / 100);

    });
}

function update ()
{
    text.setText(tween.data[0].progress);
}
