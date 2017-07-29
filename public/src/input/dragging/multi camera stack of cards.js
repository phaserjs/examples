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

        this.input.setDraggable(image);

        x += 4;
        y += 4;
    }

    //  Set the cameras
    var cam1 = this.cameras.main.setSize(512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#000000').setName('Black');

    //  Tricky to work out the right scroll to use, maybe centerToSize should do it for us?
    var cam2 = this.cameras.add(512, 0, 512, 300).setZoom(0.25).setScroll(1024-256, 600-150).setBackgroundColor('#0000aa').setName('Blue');

    var cam3 = this.cameras.add(0, 300, 512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#00aa00').setName('Green');
    var cam4 = this.cameras.add(512, 300, 512, 300).setZoom(0.5).centerToSize().setBackgroundColor('#aa0000').setName('Red');

    //  Add some rotation to camera 4
    cam4.setRotation(0.4);

    var matrix = new Phaser.GameObjects.Components.TransformMatrix();

    this.input.events.on('DRAG_EVENT', function (event) {

        var camera = event.camera;

        //  Convert pointer x/y into camera space
        matrix.applyITRS(camera.x, camera.y, -camera.rotation, camera.zoom, camera.zoom);
        matrix.invert();
        var p = matrix.transformPoint(event.x, event.y);

        //  Works perfectly as long as the camera isn't rotated.
        //  If rotated it's technically doing the right thing, but it needs to 'break' the rules and translate
        //  back into screen space again so it works as you'd expect with a pointer
        event.gameObject.x = p.x;
        event.gameObject.y = p.y;

    });

}