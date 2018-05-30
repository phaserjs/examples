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
    this.load.image('chunk', 'assets/sprites/chunk.png');
}

function create ()
{
    var texture = this.textures.get('chunk');
    var frame = this.textures.getFrame('chunk');

    var rt = this.add.renderTexture(400, 300, 800, 600).setOrigin(0.5);

    var isDown = false;
   
    this.input.addDownCallback(function (event) {

        isDown = true;

    }, false);

    this.input.addUpCallback(function (event) {

        isDown = false;

    }, false);

    this.input.addMoveCallback(function (event) {

        if (isDown)
        {
            rt.draw(texture, frame, event.pageX, event.pageY);
        }

    });
}
