var config = {
    type: Phaser.WEBGL,
    width: 1200,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('block', 'assets/sprites/50x50-white.png');
}

function create ()
{
    var hsv = Phaser.Display.Color.HSVColorWheel();

    /*
    var group1 = this.add.group({
        key: 'block',
        quantity: 100,
        gridAlign: {
            width: 10,
            height: 10,
            cellWidth: 50,
            cellHeight: 50,
            x: 50 + 25,
            y: 50 + 25
        }
    });
    */

    /*
    var group1 = this.add.group({
        key: 'block',
        quantity: 100,
        gridAlign: {
            width: 10,
            height: 10,
            cellWidth: 50,
            cellHeight: 50,
            x: 50 + 25,
            y: 50 + 25
        }
    });
    */

    var gw = 10;
    var gh = 10;
    var bs = 50;

    var group1 = this.add.group({
        key: 'block',
        quantity: gw * gh,
        gridAlign: {
            width: gw,
            height: gh,
            cellWidth: bs,
            cellHeight: bs,
            x: bs + (bs/2),
            y: bs + (bs/2)
        }
    });

    /*
    var group2 = this.add.group({
        key: 'block',
        quantity: 100,
        gridAlign: {
            width: 10,
            height: 10,
            cellWidth: 50,
            cellHeight: 50,
            x: 600 + 25,
            y: 50 + 25
        }
    });
    */

    var size = gw * gh;

    group1.getChildren().forEach(function (child, index) {

        var c = Math.floor(index * (360 / size));

        child.setTint(hsv[c].color);
        child.displayWidth = bs;
        child.displayHeight = bs;

    });

    /*
    group2.getChildren().forEach(function (child, index) {

        var c = Math.floor(index * (360 / 100));

        child.setTint(hsv[c].color);

    });
    */

        // delay: this.tweens.stagger(100),
        // delay: this.tweens.stagger(100, { from: 'first' }),
        // delay: this.tweens.stagger(100, { from: 'last' }),
        // delay: this.tweens.stagger(100, { from: 'center' }),
        // delay: this.tweens.stagger(100, { from: 50 }),
        // delay: this.tweens.stagger(100, { from: 24 }),
        // delay: this.tweens.stagger(100, { ease: 'quad.out' }),
        // delay: this.tweens.stagger(100, { ease: 'sine.inout' }),
        // delay: this.tweens.stagger(100, { from: 'last', ease: 'quad.inout' }),
        // delay: this.tweens.stagger([ 1500, 3000 ]),
        // delay: this.tweens.stagger([ 0, 5000 ], { from: 'center' }),
        // delay: this.tweens.stagger(200, { grid: [ gw, gh ], from: 'first' }),
        // delay: this.tweens.stagger(20, { ease: 'cubic.inout', from: 'center' }),

    var tween1 = this.tweens.add({
        targets: group1.getChildren(),
        scale: 0.2,
        _x: '+=700',
        _yoyo: true,
        _repeat: -1,
        duration: 1000,
        ease: 'power1',
        _delay: this.tweens.stagger([ 500, 5000 ], { from: 'center' }),
        _delay: this.tweens.stagger(500, { from: 'center' }),
        _delay: this.tweens.stagger(1000, { grid: [ gw, gh ], from: 'center' }),
        _delay: this.tweens.stagger(20, { ease: 'cubic.inout', from: 'center' }),
        _delay: this.tweens.stagger(100),
        _delay: this.tweens.stagger([ 100, 600 ], { ease: 'cubic.inout' }),
        delay: this.tweens.stagger(100, { grid: [ gw, gh ], from: 'first', ease: 'cubic.inout' }),
        paused: true
    });

    // var tween2 = this.tweens.add({
    //     targets: group2.getChildren(),
    //     scale: 0.2,
    //     duration: 500,
    //     ease: 'linear',
    //     delay: this.tweens.stagger(100, { from: 'first', ease: 'quad.out' }),
    //     paused: true
    // });

    this.input.once('pointerdown', function () {

        tween1.play();
        // tween2.play();

    });
}
