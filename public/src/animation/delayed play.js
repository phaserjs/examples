var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('gems', 'assets/tests/columns/gems.png', 'assets/tests/columns/gems.json');
}

function create ()
{
    var animConfig = {
        key: 'diamond',
        frames: this.anims.generateFrameNames('gems', { prefix: 'diamond_', end: 15, zeroPad: 4 }),
        repeat: 4
    };

    this.anims.create(animConfig);

    var sprite = this.add.sprite(400, 300, 'gems', 'diamond_0000');

    var text = this.add.text(400, 32, 'Click to Start Animation', { color: '#00ff00' }).setOrigin(0.5, 0);
    var log = [];

    sprite.on(Phaser.Animations.Events.SPRITE_ANIMATION_START, function (anim, frame, gameObject) {

        log.push('Events.SPRITE_ANIMATION_START');
        text.setText(log);

    });

    sprite.on(Phaser.Animations.Events.SPRITE_ANIMATION_REPEAT, function (anim, frame, gameObject) {

        log.push('Events.SPRITE_ANIMATION_REPEAT');
        text.setText(log);

    });

    sprite.on(Phaser.Animations.Events.SPRITE_ANIMATION_COMPLETE, function (anim, frame, gameObject) {

        log.push('Events.SPRITE_ANIMATION_COMPLETE');
        text.setText(log);

    });

    this.input.once('pointerdown', function () {

        sprite.anims.delayedPlay(2000, 'diamond');

        log.push('2000ms delay ...');

        text.setText(log);

    });
}
