var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    disableContextMenu: true,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('balls', 'assets/sprites/balls.png', { frameWidth: 17, frameHeight: 17 });
}

function create ()
{
    var graphics = this.add.graphics();

    var color = 0xffff00;
    var thickness = 2;
    var alpha = 1;

    //  Events

    var sx = 0;
    var sy = 0;
    var draw = false;

    //  Stop the right-click from triggering the context menu
    //  You can also set this in the game config
    this.input.mouse.disableContextMenu();

    this.input.events.on('POINTER_DOWN_EVENT', function (event) {

        sx = event.x;
        sy = event.y;
        draw = true;

        if (event.pointer.leftButtonDown() && event.pointer.rightButtonDown())
        {
            color = 0x00ffff;
        }
        else if (event.pointer.leftButtonDown())
        {
            color = 0xffff00;
        }
        else if (event.pointer.rightButtonDown())
        {
            color = 0x00ff00;
        }

    });

    this.input.events.on('POINTER_UP_EVENT', function (event) {

        draw = false;

    });

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {

        if (draw && event.pointer.noButtonDown() === false)
        {
            graphics.clear();
            graphics.lineStyle(thickness, color, alpha);
            graphics.strokeRect(sx, sy, event.x - sx, event.y - sy);
        }

    });
}
