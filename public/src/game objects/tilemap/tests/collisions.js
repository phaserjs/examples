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
    console.assert(condition, message)
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
}

function create() {
    var level = [
        [ 0,  0, -1, -1, -1,  0,  0],
        [ 0,  0,  0, 10,  0,  0,  0],
        [ 0,  0, 14, 13, 14,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0],
        [14, 14, 14, 14, 14, 14, 14],
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16, insertNull: true});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createStaticLayer(0, tiles);


    // -- SETTING COLLISION ON TILE ---

    var tile = map.getTileAt(0, 0);
    tile.setCollision(true, false, true, false);
    assert('Tile should collide', tile.collides);
    assert('Tile should have an interesting face', tile.hasInterestingFace);
    assert('Tile should be able to collide', tile.canCollide);
    assert('Tile should collide only on left and top side',
        tile.collideLeft && tile.collideUp && !tile.collideRight && !tile.collideDown
    );

    tile.resetCollision();
    assert('Tile should NOT collide', !tile.collides);
    assert('Tile should NOT have an interesting face', !tile.hasInterestingFace);
    assert('Tile should NOT able to collide', !tile.canCollide);


    // -- SETTING COLLISION CALLBACK ON TILE ---

    var tile = map.getTileAt(0, 5);
    tile.setCollisionCallback(() => {}, null);
    assert('Tile should NOT collide', !tile.collides);
    assert('Tile should NOT have an interesting face', !tile.hasInterestingFace);
    assert('Tile should be able to collide', tile.canCollide);

    tile.setCollisionCallback(null);
    assert('Tile should NOT be able to collide', !tile.canCollide);


    // -- SETTING COLLISION FOR LAYER ---

    map.setCollision(0);
    assert('28 tiles with index 0 should now collide',
        map.filterTiles(tile => tile.collides).length === 28
    );
    map.setCollision(0, false);
    assert('No tiles should collide',
        map.filterTiles(tile => tile.collides).length === 0
    );

    map.setCollision([ 10, 13 ]);
    assert('Two tiles (id: 10 and 13) should collide',
        map.filterTiles(tile => tile.collides).length === 2
    );
    map.setCollision([ 10, 13 ], false);
    assert('No tiles should collide',
        map.filterTiles(tile => tile.collides).length === 0
    );

    map.setCollisionBetween(10, 14);
    assert('11 tiles (id: 10, 13, 14) should collide',
        map.filterTiles(tile => tile.collides).length === 11
    );
    map.setCollisionBetween(10, 14, false);
    assert('No tiles should collide',
        map.filterTiles(tile => tile.collides).length === 0
    );
    map.setCollisionBetween(15, 0);
    assert('Setting stop < start should set no tiles to collide',
        map.filterTiles(tile => tile.collides).length === 0
    );

    map.setCollisionByExclusion(0);
    assert('All non-0 tiles should collide (11 tiles)',
        map.filterTiles(tile => tile.collides).length === 11
    );
    map.setCollisionByExclusion(0, false);
    assert('No tiles should collide',
        map.filterTiles(tile => tile.collides).length === 0
    );


    map.setCollisionByExclusion([ 13, 10 ]);
    assert('All non-13 and non-10 tiles should collide (37 tiles)',
        map.filterTiles(tile => tile.collides).length === 37
    );
    map.setCollisionByExclusion([ 13, 10 ], false);
    assert('No tiles should collide',
        map.filterTiles(tile => tile.collides).length === 0
    );


    // -- INTERESTING FACES ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createStaticLayer(0, tiles);

    map.setCollisionBetween(1, 16);
    assert('All edge tiles should have an interesting face (12 total)',
        map.filterTiles(tile => tile.hasInterestingFace).length === 12
    );
    map.setCollisionBetween(1, 16, false);
    assert('There should be no interesting faces',
        map.filterTiles(tile => tile.hasInterestingFace).length === 0
    );

    map.setCollision([ 2, 5, 6, 7, 10, 11 ]);
    var faces = map.getTilesWithin()
        .filter((tile) => tile.hasInterestingFace);
    assert('Colliding tiles (except for id 6) should have an interesting face (12 total)',
        map.filterTiles(tile => tile.hasInterestingFace).length === 5
    );
    var tile = map.getTileAt(1, 0);
    assert('Tile id 2 should only have an interesting left, right & top face',
        tile.faceLeft && tile.faceRight && tile.faceTop && !tile.faceBottom
    );
    var tile = map.getTileAt(2, 1);
    assert('Tile id 7 should only have an interesting right & top face',
        !tile.faceLeft && tile.faceRight && tile.faceTop && !tile.faceBottom
    );


    // -- COLLIDE INDEXES ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({ data: level, tileWidth: 16, tileHeight: 16 });
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles);

    map.setCollisionBetween(1, 10);
    assert('Internal collide indexes should have index 1 - 10',
        are1DArrayEqual(layer.layer.collideIndexes, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
    );
    map.setCollisionBetween(1, 10, false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollision([ 1, 2, 16 ]);
    assert('Internal collide indexes should only have index 1, 2, 16',
        are1DArrayEqual(layer.layer.collideIndexes, [ 1, 2, 16 ])
    );
    map.setCollision([ 1, 2, 16 ], false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollision(2);
    assert('Internal collide indexes should only have index 2',
        are1DArrayEqual(layer.layer.collideIndexes, [ 2 ])
    );
    map.setCollision(2, false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollisionByExclusion([1, 2, 3, 4]);
    assert('Internal collide indexes should everything except 1 - 4',
        are1DArrayEqual(layer.layer.collideIndexes, [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ])
    );
    map.setCollisionByExclusion([1, 2, 3, 4], false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollisionBetween(1, 5);
    map.setCollision([ 1, 2, 16 ]);
    assert('Internal collide indexes should everything except 1 - 4 plus 16 without duplicates',
        are1DArrayEqual(layer.layer.collideIndexes, [ 1, 2, 3, 4, 5, 16 ])
    );
    map.setCollisionBetween(1, 5, false);
    map.setCollision([ 1, 2, 16 ], false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollisionByExclusion([ 1, 2, 3, 4 ]);
    map.setCollisionBetween(1, 16);
    assert('Internal collide indexes should everything except 1 - 4 plus 1 -4 at the end, no duplicates',
        are1DArrayEqual(layer.layer.collideIndexes, [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4 ])
    );
    map.setCollisionByExclusion([ 1, 2, 3, 4 ], false);
    map.setCollisionBetween(1, 16, false);
    assert('Internal collide indexes should be empty',
        layer.layer.collideIndexes.length === 0
    );

    map.setCollisionBetween(1, 5);
    map.putTileAt(1, 3, 3);
    assert('Putting a colliding tile index should collide',
        map.getTileAt(3, 3).collides
    );
    map.putTileAt(6, 3, 3);
    assert('Putting a non-colliding tile index should NOT collide',
        !map.getTileAt(3, 3).collides
    );
    map.removeTileAt(0, 0);
    assert('Removing a colliding tile should NOT collide',
        !map.getTileAt(0, 0, true).collides
    );



    // -- INTERESTING FACE RECALCULATION ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16, insertNull: true});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles);

    map.setCollision([ 2, 5, 6, 7, 10 ]);
    assert('Index 2 should NOT have an interesting face bottom',
        !map.getTileAt(1, 0).faceBottom
    );
    map.removeTileAt(1, 1, false, false); // Don't recalc
    assert('Prevent recalculation - index 2 should still NOT have an interesting face bottom',
        !map.getTileAt(1, 0).faceBottom
    );
    layer.calculateFacesWithin();
    assert('Recalculation - index 2 should now have an interesting face bottom',
        map.getTileAt(1, 0).faceBottom
    );
    map.setCollision([ 2, 5, 6, 7, 10 ], false);
    assert('There should be no interesting faces',
        map.filterTiles(tile => tile.hasInterestingFace).length === 0
    );

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16, insertNull: true});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createDynamicLayer(0, tiles);

    map.setCollision([2, 5, 6, 7, 10], true, false); // no recalc
    assert('Should have default interesting faces setting - all colliding are interesting',
        map.filterTiles(tile => tile.hasInterestingFace).length === 5
    );
    map.calculateFacesWithin();
    assert('Recalculate faces - center tiles (id: 6) should no longer be interesting',
        map.filterTiles(tile => tile.hasInterestingFace).length === 4
    );



    // -- TILE CALLBACKS ---

    var level = [
        [ 1,  1,  1,  1],
        [ 2,  2,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16, insertNull: true});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createStaticLayer(0, tiles);

    var cb = () => {};
    map.setTileIndexCallback(1, cb, 3);
    assert('Tile index 1 should have a callback',
        map.layer.callbacks[1].callback === cb && map.layer.callbacks[1].callbackContext === 3
    );
    map.setTileIndexCallback(2, cb, 4);
    assert('Tile index 2 should have a callback',
        map.layer.callbacks[2].callback === cb && map.layer.callbacks[2].callbackContext === 4
    );
    layer.setTileIndexCallback(1, null);
    assert('Tile index 1 should have its callback removed',
        map.layer.callbacks[1] === undefined
    );



    // -- TILE LOCATION CALLBACKS ---

    var level = [
        [ 1,  2,  3,  4],
        [ 5,  6,  7,  8],
        [ 9, 10, 11, 12],
        [13, 14, 15, 16]
    ]
    var map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16, insertNull: true});
    var tiles = map.addTilesetImage('mario-tiles');
    var layer = map.createStaticLayer(0, tiles);

    var cb = () => {};
    map.setTileLocationCallback(0, 0, 2, 2, cb, 3);
    assert('Tiles from (0, 0) to (2, 2) should have the same callback & context',
        map.getTilesWithin(0, 0, 2, 2).every(tile => tile.collisionCallback === cb) &&
        map.getTilesWithin(0, 0, 2, 2).every(tile => tile.collisionCallbackContext === 3)
    );
    assert('Only 9 tiles should have a callback',
        map.filterTiles(tile => tile.collisionCallback !== undefined)
    );
    layer.setTileLocationCallback(0, 0, 2, 2, null);
    assert('Tiles from (0, 0) to (2, 2) should have their callback & context removed',
        map.getTilesWithin(0, 0, 2, 2).every(tile => tile.collisionCallback === undefined) &&
        map.getTilesWithin(0, 0, 2, 2).every(tile => tile.collisionCallbackContext === undefined)
    );



    console.log(`${testsPassed} / ${totalTests} tests passed`);
}


function are1DArrayEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
