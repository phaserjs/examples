var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var image1;
var image2;
var image3;
var image4;
var graphics;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('grid', 'assets/pics/debug-grid-1920x1920.png');
    this.load.image('atari', 'assets/sprites/atari130xe.png');
}

function create ()
{
    this.add.image(0, 0, 'grid').setOrigin(0);

    let count = 1;
    const monitor = (img) => {
        const label = count++;
        return img.setInteractive().on(
            'pointerup', (ptr, x, y) => console.log(label, x, y)
        );
    };
    image1 = monitor(this.add.image(200, 320, 'atari'));
    image2 = monitor(this.add.image(400, 320, 'atari'));
    image3 = monitor(this.add.image(600, 320, 'atari'));
    image4 = monitor(this.add.image(800, 320, 'atari'));

    // Skew X only.
    image1.skewX = -Math.PI / 2;
    this.tweens.add({
        targets: image1,
        skewX: Math.PI / 2,
        duration: 2000,
        yoyo: true,
        repeat: -1,
    });
    // Skew Y only
    image2.skewY = -Math.PI / 2;
    this.tweens.add({
        targets: image2,
        skewY: Math.PI / 2,
        duration: 2000,
        yoyo: true,
        repeat: -1,
    });
    // Skew X & spin CW.
    image3.rotation = -Math.PI / 2;
    image3.skewX = -Math.PI / 2;
    this.tweens.add({
        targets: image3,
        rotation: Math.PI / 2,
        skewX: Math.PI / 2,
        duration: 2000,
        yoyo: true,
        repeat: -1,
    });
    // Skew Y & spin CCW.
    image4.rotation = Math.PI / 2;
    image4.skewY = -Math.PI / 2;
    this.tweens.add({
        targets: image4,
        rotation: -Math.PI / 2,
        skewY: Math.PI / 2,
        duration: 2000,
        yoyo: true,
        repeat: -1,
    });
    graphics = this.add.graphics();
}

function update (time, delta)
{
    graphics.clear();
    for (let [i, c] of [
        [image1, 0xFF00FF],
        [image2, 0xFFFF00],
        [image3, 0x00FFFF],
        [image4, 0xFFFFFF],
    ]) {
        let b = i.getBounds();
        graphics.lineStyle(1, c, 1.0);
        graphics.strokeRect(b.x, b.y, b.width, b.height);
    }
}
