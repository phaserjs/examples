var game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
});

function preload ()
{
    this.load.image('test', 'assets/sprites/p2.jpg');
    this.load.image('image', 'assets/sprites/32x32.png');
}

function create ()
{
    var image = new Phaser.GameObjects.Sprite(this, 400, 300, 'image');

    image.setInteractive({
      draggable: true,
      hitArea: new Phaser.Geom.Rectangle(10,10,20,20),
      hitAreaCallback: Phaser.Geom.Rectangle.Contains
    });

    this.add.existing(image);
    image.setScale(8, 8);
    // image.setOrigin(0,0);

    this.input.enableDebug(image, 0xffff00);

    // var actualHitArea = this.add.rectangle(image.x + 30, image.y + 30, 60, 60);
    // actualHitArea.setOrigin(0,0);
    // actualHitArea.setStrokeStyle(2, 0x00ff00);

    image.on('drag', function (pointer, dragX, dragY) {
        image.x = dragX;
        image.y = dragY;
    });
    image.on('pointerover', function () {
        this.setTint(0x00ff00);
    });
    image.on('pointerout', function () {
        this.clearTint();
    });

    const image2 = this.add.image(150, 150, 'test') // test image has 200x200 size for example
    image2.setScale(1.7);
    image2.setInteractive(new Phaser.Geom.Circle(160, 120, 80), Phaser.Geom.Circle.Contains);
    this.input.enableDebug(image2);
    image2.on('pointerover', function () {
        this.setTint(0x00ff00);
    });
    image2.on('pointerout', function () {
        this.clearTint();
    });

}
