var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var totalTests = 0;
var testsPassed = 0;
var assert = (message, condition) => {
    totalTests++;
    if (condition) testsPassed++;
    console.assert(condition, message)
};

var controls;
var game = new Phaser.Game(config);

function preload() {
    this.load.tilemapJSON('map', 'assets/tilemaps/maps/features-test.json');

    this.load.spritesheet('coin', 'assets/sprites/coin.png', { frameWidth: 32, frameHeight: 32 });

    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
    this.load.image('dangerous-kiss', 'assets/tilemaps/tiles/dangerous-kiss.png');
}

function create() {
    var map = this.add.tilemap('map');

    var groundTiles = map.addTilesetImage('ground_1x1');
    var coinTiles = map.addTilesetImage('coin');
    var wallTiles = map.addTilesetImage('walls_1x2');
    var tiles2 = map.addTilesetImage('tiles2');
    var kissTiles = map.addTilesetImage('dangerous-kiss');

    var tileLayer = map.createStaticLayer('Tile Layer 1', groundTiles);
    var offsetTileLayer = map.createStaticLayer('Offset Tile Layer', tiles2);
    var tileLayer2 = map.createStaticLayer('Tile Layer 2', groundTiles);
    var smallTileLayer = map.createStaticLayer('Small Tile Layer', kissTiles);

    var cursors = this.input.keyboard.createCursorKeys();
    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    };
    controls = this.cameras.addKeyControl(controlConfig);


    // -- LAYER OFFSET ---

    assert('tileLayer should have no offset',
        tileLayer.x === 0 && tileLayer.y === 0
    );
    assert('offsetTileLayer should have (64, 32) offset from Tiled',
        offsetTileLayer.x === 64 && offsetTileLayer.y === 32
    );


    // -- CREATE FROM OBJECTS ---

    var coins = map.createFromObjects('Object Layer 1', 'coin', { key: 'coin', frame: 0});
    assert('Should create 1 coin',
        coins.length === 1
    );
    var coins = map.createFromObjects('Object Layer 1', 34, { key: 'coin', frame: 0, origin: { x: 0.5, y: 0.5} });
    assert('Should create 8 coins',
        coins.length === 8
    );
    var coins = map.createFromObjects('Object Layer 1', 'small-coin', { key: 'coin', frame: 0, origin: { x: 0.5, y: 0.5} });
    assert('Should create 7 coins',
        coins.length === 7
    );


    // -- OBJECT LAYER ---

    var objectLayer = map.objects['Object Layer 1'];

    assert('Should have an object layer',
        objectLayer
    );
    assert('Should have 13 objects',
        objectLayer.length === 13
    );

    var coin = objectLayer.find((obj) => obj.id === 3);
    assert('Should contain object at id 3',
        coin
    );
    assert('Should have coin (id = 3) data matching tiled export',
        doesObjectContain(coin, {
            id: 3,
            name: 'coin',
            type: 'collectible',
            x: 391,
            y: 207,
            visible: true,
            gid: 34,
            rotation: 90,
            flippedHorizontal: true,
            flippedVertical: false,
            properties: { alpha: 0.5 }
        })
    );

    var exit = objectLayer.find((obj) => obj.id === 1);
    assert('Should contain object at id 1',
        coin
    );
    assert('Should have exit (id = 1) data matching tiled export',
        doesObjectContain(exit, {
            id: 1,
            name: 'exit',
            type: 'door',
            x: 475,
            y: 430,
            width: 44,
            height: 114,
            rectangle: true,
            visible: true,
            rotation: 0,
            properties: { open: false }
        })
    );

    var sun = objectLayer.find((obj) => obj.id === 2);
    assert('Should contain object at id 2',
        coin
    );
    assert('Should have exit (id = 2) data matching tiled export',
        doesObjectContain(sun, {
            id: 2,
            name: 'sun',
            type: 'collision',
            x: 793,
            y: 340,
            width: 77,
            height: 70,
            visible: true,
            rotation: 0,
            ellipse: true
        })
    );

    var ramp = objectLayer.find((obj) => obj.id === 11);
    assert('Should contain object at id 11',
        ramp
    );
    assert('Should have ramp (id = 11) data matching tiled export',
        doesObjectContain(ramp, {
            id: 11,
            name: 'ramp',
            type: '',
            x: 158,
            y: 462,
            visible: true,
            rotation: 0
        })
    );
    assert('Should have ramp (id = 11) with 7 polyline points',
        ramp.polyline.length === 7
    );
    assert('Should have ramp (id = 11) with polyline points in array format',
        ramp.polyline[0].length === 2
    );

    var poly = objectLayer.find((obj) => obj.id === 19);
    assert('Should contain object at id 19',
        poly
    );
    assert('Should have poly (id = 19) data matching tiled export',
        doesObjectContain(poly, {
            id: 19,
            name: 'poly',
            type: '',
            x: 784,
            y: 128,
            visible: true,
            rotation: 45
        })
    );
    assert('Should have poly (id = 19) with 4 polygon points',
        poly.polygon.length === 4
    );
    assert('Should have poly (id = 19) with polygon points in array format',
        poly.polygon[0].length === 2
    );


    var text = objectLayer.find((obj) => obj.id === 20);
    assert('Should contain object at id 20',
        text
    );
    assert('Should have text (id = 20) data matching tiled export',
        doesObjectContain(text, {
            id: 20,
            name: 'text',
            type: '',
            x: 624,
            y: 56,
            width: 200,
            height: 50,
            rotation: 0,
            visible: true
        })
    );
    assert('Should have text (id = 20) with style from Tiled',
        doesObjectContain(text.text, {
            color: '#ffffff',
            fontfamily: 'Montserrat',
            halign: 'center',
            valign: 'center',
            pixelsize: 21,
            wrap: true
        })
    );


    // -- TILE DATA (E.G. COLLISION OBJECTS) ---

    var treeTileset = map.tilesets[map.getTilesetIndex('walls_1x2')];

    assert('Should contain walls_1x2 tileset',
        treeTileset
    );
    var tileData = treeTileset.tileData;
    var tileKeys = Object.keys(treeTileset.tileData);
    assert('Should contain tile data for each tile in tileset',
        tileKeys.length === 8
    );
    assert('Should contain object data for each tile in tileset',
        tileKeys.filter((k) => tileData[k].objectgroup).length === 8
    );
    assert('Tree 1 object layer data should match Tiled export',
        doesObjectContain(tileData['0'].objectgroup, {
            name: 'Tree 1',
            visible: true,
            opacity: 0.5
        })
    );
    assert('Tree 1 object layer data should have 2 rectangle objects',
        doesObjectContain(tileData['0'].objectgroup, {
            objects: [
                { rectangle: true },
                { rectangle: true }
            ]
        })
    );
    assert('Tree 2 object layer data should have 1 polyline object',
        doesObjectContain(tileData['1'].objectgroup, {
            name: 'Tree 2',
            objects: [
                { polyline: [] }
            ]
        })
    );
    assert('Tree 3 object layer data should have 1 ellipse and 1 rectangle',
        doesObjectContain(tileData['2'].objectgroup, {
            name: 'Tree 3',
            objects: [
                { ellipse: true },
                { rectangle: true }
            ]
        })
    );
    assert('Tree 8 object layer data should have 1 rectangle and 1 polygon',
        doesObjectContain(tileData['7'].objectgroup, {
            name: 'Tree 8',
            objects: [
                { rectangle: true },
                { polygon: [] }
            ]
        })
    );
    assert('Tileset should return tile data via GID',
        doesObjectContain(treeTileset.getTileData(26), {
            objectgroup: { name: 'Tree 1' }
        })
    );
    assert('Tileset should not return tile data for an GID that is out of range',
        treeTileset.getTileData(25) === null
    );


    // -- IMAGE COLLECTIONS ---

    assert('Map should have 4 images in first image collection',
        map.imageCollections[0].images.length === 4
    );


    // -- OFFSETS ---

    assert('Offset Tile Layer should be at (64, 32) via offset',
        map.getLayer('Offset Tile Layer').x === 64 &&
        map.getLayer('Offset Tile Layer').y === 32
    );
    assert('Tile Layer 2 should have no offset',
        map.getLayer('Tile Layer 2').x === 0 &&
        map.getLayer('Tile Layer 2').y === 0
    );
    assert('Offset Object Layer should have a circle at (606, 412) via offset',
        map.objects['Offset Object Layer'][0].x === 606 &&
        map.objects['Offset Object Layer'][0].y === 412
    );


    // -- IMAGE LAYER ---

    assert('Image Layer 1 should exist',
        map.getImageIndex('Image Layer 1') !== null
    );
    var imageLayer = map.images[map.getImageIndex('Image Layer 1')];
    assert('Image Layer 1 should have custom properties',
        imageLayer.properties.alpha === 0.8 && imageLayer.properties.x === 300
    );


    console.log(`${testsPassed} / ${totalTests} tests passed`);
}


function update (time, delta)
{
    controls.update(delta);
}


function doesObjectContain (obj1, obj2) {
    const debug = () => console.log(
        `Objects don't match:\n${JSON.stringify(obj1, null, 2)}\n${JSON.stringify(obj2, null, 2)}`
    );
    if (typeof obj1 !== typeof obj2 || typeof obj1 !== 'object') {
        debug();
        return false;
    }
    for (const key of Object.keys(obj2)) {
        var v1 = obj1[key];
        var v2 = obj2[key];
        if (typeof v1 !== typeof v2) {
            debug();
            return false;
        }
        else if (typeof v1 === 'object') {
            if (!doesObjectContain(v1, v2)) {
                debug();
                return false;
            }
        }
        else if (v1 !== v2) {
            debug();
            return false;
        }
    }
    return true;
}
