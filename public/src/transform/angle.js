var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('arrow', 'assets/sprites/arrow.png');
    this.load.atlas('atlas', 'assets/atlas/megaset-2.png', 'assets/atlas/megaset-2.json');

}

function create() {

    //  Angle uses degrees instead of radians

    for (var a = 0; a <= 360; a += 45)
    {
        var frame = this.add.image(a * 2, 200, 'atlas', 'arrow');
        frame.angle = a;

        var image = this.add.image(a * 2, 500, 'arrow');
        image.angle = a;
    }

}
