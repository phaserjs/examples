var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1024,
    height: 600,
    backgroundColor: '#fafafa',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
}

function create ()
{
    //  Create a stack of random cards

    var frames = this.textures.get('cards').getFrameNames();

    var x = 100;
    var y = 100;

    for (var i = 0; i < 64; i++)
    {
        var image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();

        // image.setScrollFactor(0.25);
        // image.setScrollFactor(0.5);
        // image.setScrollFactor(2);

        this.input.setDraggable(image);

        x += 4;
        y += 4;
    }

    //  Tricky to work out the right scroll to use, maybe centerToSize should do it for us?

    // var cam1 = this.cameras.main.setSize(512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#000000').setName('Black');
    // var cam2 = this.cameras.add(512, 0, 512, 300).setZoom(0.25).setScroll(1024-256, 600-150).setBackgroundColor('#0000aa').setName('Blue');
    // var cam3 = this.cameras.add(0, 300, 512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#00aa00').setName('Green');
    // var cam4 = this.cameras.add(512, 300, 512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#aa0000').setName('Red');

    var cam1 = this.cameras.main.setSize(512, 300).setZoom(0.5).setBackgroundColor('#000000').setName('Black');
    var cam2 = this.cameras.add(512, 0, 512, 300).setZoom(0.25).setBackgroundColor('#0000aa').setName('Blue');
    var cam3 = this.cameras.add(0, 300, 512, 300).setZoom(0.5).setBackgroundColor('#00aa00').setName('Green');
    var cam4 = this.cameras.add(512, 300, 512, 300).setZoom(0.5).setBackgroundColor('#aa0000').setName('Red');

    //  Add some rotation to camera 4
    cam4.setRotation(0.4);

    console.log(cam1.scrollX, cam1.scrollY);
    console.log(cam2.scrollX, cam2.scrollY);
    console.log(cam3.scrollX, cam3.scrollY);
    console.log(cam4.scrollX, cam4.scrollY);

    var matrix = new Phaser.GameObjects.Components.TransformMatrix();

    this.input.on('drag', function (pointer, gameObject) {

        var camera = pointer.camera;

        //  Convert pointer x/y into camera space

        matrix.applyITRS(camera.x, camera.y, -camera.rotation, camera.zoom, camera.zoom);
        matrix.invert();
        var p = matrix.transformPoint(pointer.x, pointer.y);

        gameObject.x = p.x + camera.x * camera.zoom;
        gameObject.y = p.y + camera.y * camera.zoom;

        // gameObject.x = p.x - camera.scrollX * camera.zoom;
        // gameObject.y = p.y - camera.scrollY * camera.zoom;

        // gameObject.x = p.x * gameObject.scrollFactorX;
        // gameObject.y = p.y * gameObject.scrollFactorY;

        //  This works if scrollFactor = 0.5, but not at any other scrollFactor.
        //  I assume because camera zoom is 0.5?

        // gameObject.x = p.x + camera.scrollX;
        // gameObject.y = p.y + camera.scrollY;

        // gameObject.x = (p.x * gameObject.scrollFactorX) + camera.scrollX;
        // gameObject.y = (p.y * gameObject.scrollFactorY) + camera.scrollY;

    });

}