var config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create
    }
};

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) => {
    totalTests++;
    if (condition) testsPassed++;
    console.assert(condition, message);
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapJSON('mario', 'assets/tilemaps/maps/super-mario.json');
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');

    this.load.image('catastrophi-tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.tilemapCSV('catastrophi-level3', 'assets/tilemaps/csv/catastrophi_level3.csv');
}

function create ()
{
    var camera = this.cameras.main;
    this.cameras.main.setScroll(-25, -50);
    var map = this.make.tilemap({key: 'mario'});
    var tiles = map.addTilesetImage('SuperMarioBros-World1-1', 'mario-tiles');
    var layer = map.createStaticLayer('World1', tiles, 20, 20);


    // -- GETTING TILES ---

    assert('Map and layer should both be able to get the same tile (id 11)',
        layer.getTileAt(16, 8).index === 11 && map.getTileAt(16, 8).index === 11
    );
    assert('Map should get tile from layer when index is passed in for layerID',
        map.getTileAt(16, 8, 0).index === 11
    );
    assert('Map should get tile from layer when string is passed in for layerID',
        map.getTileAt(16, 8, 'World1').index === 11
    );
    assert('Map should get tile from layer when TilemapLayer is passed in for layerID',
        map.getTileAt(16, 8, layer).index === 11
    );
    assert('There should be a tile at (3, 3)',
        map.hasTileAt(3, 3) && layer.hasTileAt(3, 3)
    );
    assert('There should be no tile outside bounds',
        !map.hasTileAt(0, 50000) && !layer.hasTileAt(0, 50000)
    );
    assert('There should be no tile outside bounds',
        !map.hasTileAtWorldXY(-100, 100) && !layer.hasTileAtWorldXY(-100, 100)
    );
    assert('Getting a tile in world coords',
        !map.hasTileAtWorldXY(-100, 100) && !layer.hasTileAtWorldXY(-100, 100)
    );

    // Better tested in visual examples:
    // const p1 = worldToLocal(16 * 16, 8 * 16, layer, camera);
    // console.log(map.getTileAtWorldXY(p1.x, p1.y).index === 11);
    // const p2 = worldToLocal(16 * 16 + 8.5, 8 * 16 + 12.25, layer, camera);
    // console.log(layer.getTileAtWorldXY(p2.x, p2.y).index === 11);
    // const p3 = worldToLocal(3 * 16, 3 * 16, layer, camera);
    // console.log(map.hasTileAtWorldXY(p3.x, p3.y) === true);

    var level = [
        [ 6, -1,  1,  2,  3,  0,  5],
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0, 10,  0,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [14, 14, 14, 14, 14, 14, 14],
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 300, 275);

    assert('Getting an -1 tile at (1, 0) should return null',
        layer.getTileAt(1, 0) === null && map.getTileAt(1, 0) === null
    );
    assert('Getting a tile location out of bounds should return null',
        layer.getTileAt(-10, 0) === null && map.getTileAt(-10, 0) === null
    );
    assert('Getting an -1 tile at (1, 0) with nonNull should return a -1 index tile',
        map.getTileAt(1, 0, true).index === -1
    );
    assert('Getting a tile at (0, 0) return ID 6',
        map.getTileAt(0, 0).index === 6
    );

    assert('Getting tiles without specifying region should return all tiles',
        map.getTilesWithin().length === 6 * 7
    );
    assert('Getting tiles with a 1x1 area should return one tile',
        are1DArrayEqual(map.getTilesWithin(3, 3, 1, 1).map(t => t.index), [ 13 ])
    );
    assert('Getting tiles with a region that goes off the map should be clipped',
        are1DArrayEqual(map.getTilesWithin(-4, -4, 5, 5).map(t => t.index), [ 6 ])
    );



    // --- GETTING TILES WITH FILTERS ---

    var level = [
        [ 6, -1,  1,  2,  3, -1,  5],
        [ 0, -1,  0,  0,  0, -1,  0],
        [ 0,  0,  0, 14,  0,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [14, 14, 14, 14, 14, 14, 14],
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles, 600, 275);

    var nonEmpty = map.getTilesWithin(0, 0, map.width, map.height, { isNotEmpty: true });
    assert('getTilesWithin isNotEmpty option should filter out index -1',
        nonEmpty.length > 0 && nonEmpty.every(tile => tile.index !== -1)
    );

    map.setCollision([ -1, 13, 14 ]);
    var colliding = layer.getTilesWithin(0, 0, map.width, map.height, { isColliding: true });
    assert('getTilesWithin isColliding option should filter out non-colliding tiles',
        colliding.length > 0 && colliding.every(tile => tile.collides)
    );

    var interesting = map.getTilesWithin(0, 0, map.width, map.height, { hasInterestingFace: true });
    assert('getTilesWithin hasInterestingFace option should filter out non-interesting tiles',
        interesting.length > 0 && interesting.every(tile => tile.hasInterestingFace)
    );

    var allOptions = layer.getTilesWithin(0, 0, map.width, map.height, {
        isNotEmpty: true,
        isColliding: true,
        hasInterestingFace: true
    });
    assert('getTilesWithin with all options should filter out non-interesting, non-colliding, empty tiles',
        allOptions.length > 0 && allOptions.every(
            tile => tile.index !== -1 && tile.collides && tile.hasInterestingFace
        )
    );
    var allOptions = map.getTilesWithinWorldXY(layer.x, layer.y, 1000000, 1000000, {
        isNotEmpty: true,
        isColliding: true,
        hasInterestingFace: true
    });
    assert('getTilesWithinWorldXY with all options should filter out non-interesting, non-colliding, empty tiles',
        allOptions.length > 0 && allOptions.every(
            tile => tile.index !== -1 && tile.collides && tile.hasInterestingFace
        )
    );
    var forEachArray = [];
    layer.forEachTile(t => forEachArray.push(t), null, 0, 0, map.width, map.height, {
        isNotEmpty: true,
        isColliding: true,
        hasInterestingFace: true
    });
    assert('forEachTile with all options should match getTilesWithin with all options',
        are1DArrayEqual(forEachArray, allOptions)
    );


    // Better tested visually in other examples:
    // var level = [
    //     [ 6,  6,  6, -1, -1, -1,  0],
    //     [ 6,  6,  6,  3,  3,  0,  0],
    //     [ 6,  6,  6,  3,  3,  0,  0],
    //     [ 1,  1,  0,  3,  3,  0,  0],
    //     [ 1,  1,  1, 13, 14,  0,  0],
    //     [ 0,  1,  1, 14, 14, 14, 14],
    // ]
    // var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16});
    // var tiles = map.addTilesetImage('mario-tiles');
    // var layer = map.createDynamicLayer(0, tiles, 0, 0);
    // var {x, y} = worldToLocal(0, 0, layer, camera);
    // layer.setScale(2, 2);
    // var tw = 32;
    // var th = 32;

    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Rectangle(x, y, tw, th)
    // );
    // assert('getTilesWithinShape with rect matching top left tile should return top left tile',
    //     tiles.length === 1 && tiles[0].x === 0 && tiles[0].y === 0
    // );
    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Rectangle(x, y, tw * 2 + 0.1, th * 2 + 0.1)
    // );
    // assert('getTilesWithinShape chunk of tiles with index 6 should return all 6s',
    //     tiles.length === 9 && tiles.every(tile => tile.index === 6)
    // );
    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Rectangle(-100, -100, 100, 100)
    // );
    // assert('getTilesWithinShape with no overlap should return empty array',
    //     tiles.length === 0
    // );
    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Rectangle(x + tw * 3, y + th * 1, tw * 2, th * 2 + 0.5)
    // );
    // assert('getTilesWithinShape chunk of tiles with index 3 should return all 3s',
    //     tiles.length === 6 && tiles.every(tile => tile.index === 3)
    // );

    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Line(x, y, x + tw, y)
    // );
    // assert('getTilesWithinShape with line only in top left tile should return top left tile',
    //     tiles.length === 1 && tiles.every(tile => tile.index === 6)
    // );
    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Line(x, y + th * 3, x + tw * 3, y + th * 6)
    // );
    // assert('getTilesWithinShape with diagonal line through 3x3 of 1s should return all 1s',
    //     tiles.length === 7 && tiles.every(tile => tile.index === 1)
    // );

    // var tiles = map.getTilesWithinShape(
    //     new Phaser.Geom.Circle(x, y, tw)
    // );
    // assert('getTilesWithinShape with rect matching top left tile should return top left tile',
    //     tiles.length === 1 && tiles[0].x === 0 && tiles[0].y === 0
    // );


    console.log(`${testsPassed} / ${totalTests} tests passed`);
}


function worldToLocal(x, y, layer, camera) {
    if (!camera) camera = this.cameras.main;
    return {
        x: x + layer.x - camera.scrollX,
        y: y + layer.y - camera.scrollY,
    }
}

function are1DArrayEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
