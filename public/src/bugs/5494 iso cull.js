var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;
var layer;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/tilemaps/iso/iso-64x64-outside.png');
}


function fillLayer() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        layer.putTileAt(0, i, j);
      }
    }
  }

function create ()
{
    var map = this.make.tilemap({ tileWidth: 64, tileHeight: 64  });
    map.orientation = 1;

    var tileset1 = map.addTilesetImage('iso-64x64-outside', 'tiles');

    layer = map.createBlankLayer('ground', tileset1);

    // layer.setSkipCull(true);

    console.log(layer);

    var cursors = this.input.keyboard.createCursorKeys();

    // this.cameras.main.setScroll(-340, -100);

    fillLayer();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.04,
        drag: 0.0005,
        maxSpeed: 0.7
    };

    controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}

function update (time, delta)
{
    controls.update(delta);
}
