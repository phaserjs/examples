var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 512,
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

new Phaser.Game(config);

function preload() {
    this.load.image('backdrop', 'assets/pics/platformer-backdrop.png')
    this.load.image('cannon', 'assets/tests/timer/cannon.png');
    this.load.spritesheet('chick', 'assets/sprites/chick.png', { frameWidth: 16, frameHeight: 18 });
}

function create() {
    var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
    var SetToAngle = Phaser.Geom.Line.SetToAngle;
    var velocityFromRotation = this.physics.velocityFromRotation;

    this.add.image(320, 256, 'backdrop').setScale(2);
    var cannon = this.add.image(64, 448, 'cannon');
    var chick = this.physics.add.sprite(cannon.x, cannon.y, 'chick').setScale(2);
    var gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });

    var velocity = new Phaser.Math.Vector2();
    var line = new Phaser.Geom.Line();

    // Disable physics body, deactivate game object, hide game object
    chick.disableBody(true, true);

    this.anims.create({ key: 'fly', frames: this.anims.generateFrameNumbers('chick', [0, 1, 2, 3]), frameRate: 5, repeat: -1 });

    this.input.on('pointermove', function (pointer) {
        var angle = BetweenPoints(cannon, pointer);

        SetToAngle(line, cannon.x, cannon.y, angle, 128);
        velocityFromRotation(angle, 600, velocity);
        gfx.clear().strokeLineShape(line);
    }, this);

    this.input.on('pointerup', function () {
        // Enable physics body and reset (at position), activate game object, show game object
        chick.enableBody(true, cannon.x, cannon.y, true, true).setVelocity(velocity.x, velocity.y);
        chick.play('fly');
    }, this);
}
