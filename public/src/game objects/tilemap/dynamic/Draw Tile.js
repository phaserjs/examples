var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: '#000',
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var tx = 0;
var ty = 0;
var tileView = null;
var currentTileId = 0;
var activeTilemap = 0;
var tileViewVisible = false;
var moveHorizontal = 0;
var moveVertical = 0;
var mouseDown = false;
var tileWidth = 16;
var tileHeight = 16;
var tilemaps = [];
var square = null;
var selected = null;
var time = 0;
var culled;
var currentTile;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.bitmapFont('nokia16', 'assets/fonts/bitmap/nokia16.png', 'assets/fonts/bitmap/nokia16.xml');
}

function create ()
{
    tilemaps[0] = this.add.tilemap(null, 0, 0, tileWidth, tileHeight, 100, 100, 'image');
    tilemaps[1] = this.add.tilemap(null, 0, 0, tileWidth, tileHeight, 100, 100, 'image');
    tilemaps[2] = this.add.tilemap(null, 0, 0, tileWidth, tileHeight, 100, 100, 'image');
    currentTile = this.add.tilemap([0], 0, 0, tileWidth, tileHeight, 1, 1, 'image');

    tilemaps[0].scrollFactorX = 0.2;
    tilemaps[0].scrollFactorY = 0.2;
    tilemaps[1].scrollFactorX = 0.5;
    tilemaps[1].scrollFactorY = 0.5;
    tilemaps[2].scrollFactorX = 1.0;
    tilemaps[2].scrollFactorY = 1.0;

    tileView = this.add.image(0, 0, 'image').setOrigin(0);
    var topText = this.add.bitmapText(0, 480 - 70, 'nokia16', "Layer: 1");
    var text = this.add.bitmapText(0, 480 - 50, 'nokia16', "Press Z to display Tile Selector\n1-3 to switch layers. Press X to display view all layers");
    culled = this.add.bitmapText(0, 480 - 90, 'nokia16', "Visible Tiles: 0");
    square = this.add.graphics(0, 0);
    selected = this.add.graphics(0, 0);
    var state = this;

    topText.scrollFactorX = 0;
    topText.scrollFactorY = 0;
    culled.scrollFactorX = 0;
    culled.scrollFactorY = 0;
    text.scrollFactorX = 0;
    text.scrollFactorY = 0;
    square.scrollFactorX = 0;
    square.scrollFactorY = 0;
    tileView.scrollFactorX = 0;
    tileView.scrollFactorY = 0;

    tileView.visible = false;
    square.clear();
    square.lineStyle(1, 0xFFFF00, 1.0);
    square.strokeRect(0, 0, 16, 16);
    selected.clear();
    selected.lineStyle(1, 0x00FFFF, 1.0);
    selected.strokeRect(0, 0, 16, 16);
    tilemaps[0].forEach(function (tile) { tile.visible = false; });
    tilemaps[1].forEach(function (tile) { tile.visible = false; });
    tilemaps[2].forEach(function (tile) { tile.visible = false; });
    tilemaps[1].alpha = 0.5;
    tilemaps[2].alpha = 0.5;
    selected.visible = 0;
    this.input.events.on('MOUSE_MOVE_EVENT', function (event) {
        if (!tileView.visible)
        {
            tx = Math.floor(event.x / tileWidth);
            ty = Math.floor(event.y / tileHeight);
            square.x = Math.floor(event.x / tileWidth) * tileWidth;
            square.y = Math.floor(event.y / tileHeight) * tileHeight;
            currentTile.x = square.x;
            currentTile.y = square.y;
        }
        else
        {
            var ex = Math.min(event.x, tileView.width - tileWidth);
            var ey = Math.min(event.y, tileView.height - tileHeight);
            tx = Math.floor(ex / tileWidth);
            ty = Math.floor(ey / tileHeight);
            square.x = Math.floor(ex / tileWidth) * tileWidth;
            square.y = Math.floor(ey / tileHeight) * tileHeight;

        }
    }); 
    this.input.events.on('MOUSE_DOWN_EVENT', function (event) {
        mouseDown = true;
        if (tileView.visible)
        {
            selected.x = square.x;
            selected.y = square.y;
        }

    });
    this.input.events.on('MOUSE_UP_EVENT', function (event) {
        mouseDown = false;
    });
    this.input.events.on('KEY_DOWN_EVENT', function (event) {
        if (event.data.code === 'KeyZ')
        {
            selected.visible = true;
            tileView.visible = true;
            currentTile.visible = false;
        }
        
        if (event.data.code === 'ArrowLeft')
            moveHorizontal = 1;
        else if (event.data.code === 'ArrowRight')
            moveHorizontal = -1;
        
        if (event.data.code === 'ArrowUp')
            moveVertical = 1;
        else if (event.data.code === 'ArrowDown')
            moveVertical = -1;

        if (event.data.code === 'Digit1')
        {
            activeTilemap = 0;
            tilemaps[0].alpha = 1.0;
            tilemaps[1].alpha = 0.5;
            tilemaps[2].alpha = 0.5;
            topText.setText('Layer: 1');
        }
        else if (event.data.code === 'Digit2')
        {
            activeTilemap = 1;
            tilemaps[0].alpha = 0.5;
            tilemaps[1].alpha = 1.0;
            tilemaps[2].alpha = 0.5;
            topText.setText('Layer: 2');
        }
        else if (event.data.code === 'Digit3')
        {
            activeTilemap = 2;
            tilemaps[0].alpha = 0.5;
            tilemaps[1].alpha = 0.5;
            tilemaps[2].alpha = 1.0;
            topText.setText('Layer: 3');
        }
    });
    this.input.events.on('KEY_UP_EVENT', function (event) {

        if (event.data.code === 'KeyZ')
        {
            selected.visible = false;
            tileView.visible = false;
            currentTile.visible = true;
        }

        if (event.data.code === 'KeyX')
        {
            tilemaps[0].alpha = 1.0;
            tilemaps[1].alpha = 1.0;
            tilemaps[2].alpha = 1.0;
        }

        if (event.data.code === 'ArrowLeft' || event.data.code === 'ArrowRight')
            moveHorizontal = 0;
        
        if (event.data.code === 'ArrowUp' || event.data.code === 'ArrowDown')
            moveVertical = 0;

    });
}

function update ()
{
    this.cameras.main.scrollX += 5 * moveHorizontal;
    this.cameras.main.scrollY += 5 * moveVertical;

    culled.setText('Visible Tiles: ' + (tilemaps[0].getVisibleTileCount(this.cameras.main) + 
                                        tilemaps[1].getVisibleTileCount(this.cameras.main) + 
                                        tilemaps[2].getVisibleTileCount(this.cameras.main)));

    if (mouseDown)
    {
        if (!tileView.visible)
        {
            var tilemap = tilemaps[activeTilemap];
            var tile = tilemap.getTileAt(tx, ty);
            if (tile !== null)
            {
                tile.visible = true;
                tile.setId(currentTileId);
            }
        }
        else
        {
            currentTileId = (ty * 28 + tx);
            currentTile.getTileAtIndex(0).setId(currentTileId);
        }
    }
}