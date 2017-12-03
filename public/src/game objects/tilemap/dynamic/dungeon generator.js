// Minified & tweaked dungeon generator at mikewesthad/dungeon (fork of nickgravelyn/dungeon)
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Dungeon=e():t.Dungeon=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ASCII_MAP={0:" ",1:"#",2:"_",3:":"};e.default={EMPTY:0,WALL:1,FLOOR:2,DOOR:3}},function(t,e,o){"use strict";t.exports=o(2).default},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],r=!0,i=!1,n=void 0;try{for(var a,h=t[Symbol.iterator]();!(r=(a=h.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&h.return&&h.return()}finally{if(i)throw n}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=o(3),h=r(o(4)),s=o(0),u=r(s),f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.width,r=void 0===o?50:o,i=e.height,n=void 0===i?50:i,a=e.minRoomSize,h=void 0===a?5:a,s=(e.maxRoomSize,e.maxNumRooms),u=void 0===s?50:s,f=e.maxRoomArea,d=void 0===f?150:f,l=e.tileMapping,m=void 0===l?{}:l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=r,this.height=n,this.minRoomSize=Math.max(h,1),this.maxRoomSize=Math.max(d,1),this.maxNumRooms=Math.max(u,1),this.maxRoomArea=Math.max(d,1),void 0===m.empty&&(m.empty=-1),void 0===m.wall&&(m.wall=0),void 0===m.door&&(m.door=1),void 0===m.floor&&(m.floor=2),this.tileMapping=m,this.rooms=[],this.roomGrid=[],this.generate()}return n(t,[{key:"generate",value:function(){this.rooms=[],this.roomGrid=[];for(var t=0;t<this.height;t++){this.roomGrid.push([]);for(var e=0;e<this.width;e++)this.roomGrid[t].push([])}var o=this.createRandomRoom();o.x=Math.floor(this.width/2)-Math.floor(o.width/2),o.y=Math.floor(this.height/2)-Math.floor(o.height/2),this.addRoom(o);for(var r=5*this.maxNumRooms;(this.maxNumRooms<=0||this.rooms.length<this.maxNumRooms)&&r-- >0;)this.generateRoom();for(var n=0;n<this.rooms.length;n++)for(var a=this.getPotentiallyTouchingRooms(this.rooms[n]),h=0;h<a.length;h++)if(!this.rooms[n].isConnectedTo(a[h])&&Math.random()<.2){var s=this.findNewDoorLocation(this.rooms[n],a[h]),u=i(s,2),f=u[0],d=u[1];this.addDoor(f),this.addDoor(d)}}},{key:"getRoomAt",value:function(t,e){return t<0||e<0||t>=this.width||e>=this.height?null:this.roomGrid[e][t][0]}},{key:"debugRoomGrid",value:function(){var t=this.roomGrid.map(function(t){return t.map(function(t){return(""+t.length).padStart(2)})}).map(function(t){return t.join(" ")}).join("\n");console.log(t)}},{key:"debugMap",value:function(){var t=this.getFlattenedTiles().map(function(t){return t.map(function(t){return s.ASCII_MAP[t]})}).map(function(t){return t.join(" ")}).join("\n");console.log(t)}},{key:"getTiles",value:function(){var t=this;return this.getFlattenedTiles().map(function(e){return e.map(function(e){return e===u.default.EMPTY?t.tileMapping.empty:e===u.default.WALL?t.tileMapping.wall:e===u.default.FLOOR?t.tileMapping.floor:e===u.default.DOOR?t.tileMapping.door:e})})}},{key:"addRoom",value:function(t){if(!this.canFitRoom(t))return!1;this.rooms.push(t);for(var e=t.y;e<t.y+t.height;e++)for(var o=t.x;o<t.x+t.width;o++)this.roomGrid[e][o].push(t);return!0}},{key:"canFitRoom",value:function(t){if(t.x<0||t.x+t.width>this.width-1)return!1;if(t.y<0||t.y+t.height>this.height-1)return!1;for(var e=0;e<this.rooms.length;e++){var o=this.rooms[e];if(this.roomIntersect(t,o))return!1}return!0}},{key:"createRandomRoom",value:function(){var t=0,e=0,o=0;do{o=(t=(0,a.randomOddInteger)(this.minRoomSize,this.maxRoomSize))*(e=(0,a.randomOddInteger)(this.minRoomSize,this.maxRoomSize))}while(o>this.maxRoomArea);return new h.default(t,e)}},{key:"roomIntersect",value:function(t,e){var o=t.x,r=t.y,i=t.width,n=t.height,a=e.x,h=e.y,s=e.width,u=e.height;return!(o+i<=a||o>=a+s||r+n<=h||r>=h+u)}},{key:"generateRoom",value:function(){for(var t=this.createRandomRoom(),e=150;e-- >0;){var o=this.findRoomAttachment(t);if(t.x=o.x,t.y=o.y,this.addRoom(t)){var r=this.findNewDoorLocation(t,o.target),n=i(r,2),a=n[0],h=n[1];this.addDoor(a),this.addDoor(h);break}}}},{key:"getFlattenedTiles",value:function(){for(var t=Array(this.height),e=0;e<this.height;e++){t[e]=Array(this.width);for(i=0;i<this.width;i++)t[e][i]=u.default.EMPTY}for(var o=0;o<this.rooms.length;o++)for(var r=this.rooms[o],e=0;e<r.height;e++)for(var i=0;i<r.width;i++)t[e+r.y][i+r.x]=r.tiles[e][i];return t}},{key:"getCollisionMap",value:function(){for(var t=Array(this.height),e=0;e<this.height;e++){t[e]=Array(this.width);for(i=0;i<this.width;i++)t[e][i]=0}for(var o=0;o<this.rooms.length;o++)for(var r=this.rooms[o],e=0;e<r.height;e++)for(var i=0;i<r.width;i++){var n=0;switch(r.tiles[e][i]){case u.default.Wall:n=1;break;case u.default.StairsUp:n=2;break;case u.default.StairsDown:n=3}t[e+r.y][i+r.x]=n}return t}},{key:"getPotentiallyTouchingRooms",value:function(t){for(var e=[],o=function(o,r,i){for(var n=i[r][o],a=0;a<n.length;a++)if(n[a]!=t&&e.indexOf(n[a])<0){var h=o-n[a].x,s=r-n[a].y;(h>0&&h<n[a].width-1||s>0&&s<n[a].height-1)&&e.push(n[a])}},r=t.x+1;r<t.x+t.width-1;r++)o(r,t.y,this.roomGrid),o(r,t.y+t.height-1,this.roomGrid);for(var i=t.y+1;i<t.y+t.height-1;i++)o(t.x,i,this.roomGrid),o(t.x+t.width-1,i,this.roomGrid);return e}},{key:"findNewDoorLocation",value:function(t,e){var o={x:-1,y:-1},r={x:-1,y:-1},i=-1;switch(t.y==e.y-t.height?i=0:t.x==e.x-t.width?i=1:t.x==e.x+e.width?i=2:t.y==e.y+e.height&&(i=3),i){case 0:o.x=r.x=(0,a.randomInteger)(Math.floor(Math.max(e.x,t.x)+1),Math.floor(Math.min(e.x+e.width,t.x+t.width)-1)),o.y=t.y+t.height-1,r.y=e.y;break;case 1:o.x=t.x+t.width-1,r.x=e.x,o.y=r.y=(0,a.randomInteger)(Math.floor(Math.max(e.y,t.y)+1),Math.floor(Math.min(e.y+e.height,t.y+t.height)-1));break;case 2:o.x=t.x,r.x=e.x+e.width-1,o.y=r.y=(0,a.randomInteger)(Math.floor(Math.max(e.y,t.y)+1),Math.floor(Math.min(e.y+e.height,t.y+t.height)-1));break;case 3:o.x=r.x=(0,a.randomInteger)(Math.floor(Math.max(e.x,t.x)+1),Math.floor(Math.min(e.x+e.width,t.x+t.width)-1)),o.y=t.y,r.y=e.y+e.height-1}return[o,r]}},{key:"findRoomAttachment",value:function(t){var e=(0,a.randomPick)(this.rooms),o=0,r=0;switch((0,a.randomInteger)(0,4)){case 0:o=(0,a.randomInteger)(e.x-t.width+3,e.x+e.width-2),r=e.y-t.height;break;case 1:o=e.x-t.width,r=(0,a.randomInteger)(e.y-t.height+3,e.y+e.height-2);break;case 2:o=e.x+e.width,r=(0,a.randomInteger)(e.y-t.height+3,e.y+e.height-2);break;case 3:o=(0,a.randomInteger)(e.x-t.width+3,e.x+e.width-2),r=e.y+e.height}return{x:o,y:r,target:e}}},{key:"addDoor",value:function(t){for(var e=this.roomGrid[t.y][t.x],o=0;o<e.length;o++){var r=e[o],i=t.x-r.x,n=t.y-r.y;r.tiles[n][i]=u.default.DOOR}}}]),t}();e.default=f},function(t,e,o){"use strict";function r(t,e){return Math.floor(Math.random()*(e-t)+t)}Object.defineProperty(e,"__esModule",{value:!0}),e.randomInteger=r,e.randomOddInteger=function(t,e){t%2==0&&t++,e%2==0&&e--;var o=(e-t)/2;return 2*Math.floor(Math.random()*(o+1))+t},e.randomPick=function(t){return t[r(0,t.length-1)]}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),i=function(t){return t&&t.__esModule?t:{default:t}}(o(0)),n=function(){function t(e,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=e,this.height=o,this.x=0,this.y=0,this.doors=[],this.tiles=[];for(var r=0;r<this.height;r++){for(var n=[],a=0;a<this.width;a++)0==r||r==this.height-1||0==a||a==this.width-1?n.push(i.default.WALL):n.push(i.default.FLOOR);this.tiles.push(n)}}return r(t,[{key:"getDoorLocations",value:function(){for(var t=[],e=0;e<this.height;e++)for(var o=0;o<this.width;o++)this.tiles[e][o]==i.default.DOOR&&t.push({x:o,y:e});return t}},{key:"isConnectedTo",value:function(t){for(var e=this.getDoorLocations(),o=0;o<e.length;o++){var r=e[o];if(r.x+=this.x,r.y+=this.y,r.x-=t.x,r.y-=t.y,!(r.x<0||r.x>t.width-1||r.y<0||r.y>t.height-1)&&t.tiles[r.y][r.x]==i.default.DOOR)return!0}return!1}}]),t}();e.default=n}])});

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var controls;
var activeRoom;
var dungeon;
var map;
var player;
var cursors;
var player;
var lastMoveTime = 0;
var cam;

// Tile index mapping to make the code more readable
var TILES = {
    TOP_LEFT_WALL: 3,
    TOP_RIGHT_WALL: 4,
    BOTTOM_RIGHT_WALL: 23,
    BOTTOM_LEFT_WALL: 22,
    TOP_WALL: [
        { index: 39, weight: 4 },
        { index: 57, weight: 1 },
        { index: 58, weight: 1 },
        { index: 59, weight: 1 }
    ],
    LEFT_WALL: [
        { index: 21, weight: 4 },
        { index: 76, weight: 1 },
        { index: 95, weight: 1 },
        { index: 114, weight: 1 }
    ],
    RIGHT_WALL: [
        { index: 19, weight: 4 },
        { index: 77, weight: 1 },
        { index: 96, weight: 1 },
        { index: 115, weight: 1 }
    ],
    BOTTOM_WALL: [
        { index: 1, weight: 4 },
        { index: 78, weight: 1 },
        { index: 79, weight: 1 },
        { index: 80, weight: 1 }
    ],
    FLOOR: [
        { index: 6, weight: 20 },
        { index: 7, weight: 1 },
        { index: 8, weight: 1 },
        { index: 26, weight: 1 },
    ]
};

function preload ()
{
    this.load.spritesheet('dude', 'assets/sprites/dude.png', { frameWidth: 32, frameHeight: 48 });

    // Credits! Michele "Buch" Bucelli (tilset artist) & Abram Connelly (tileset sponser)
    // https://opengameart.org/content/top-down-dungeon-tileset
    this.load.image('tiles', 'assets/tilemaps/tiles/buch-dungeon-tileset.png');
}

function create ()
{
    // Note: Dungeon is not a Phaser element - it's from the custom script embedded at the top :)
    // It generates a simple set of connected rectangular rooms that then we can turn into a tilemap
    dungeon = new Dungeon({ width: 50, height: 50, minRoomSize: 7 });

    // Creating a blank tilemap with dimensions matching the dungeon
    map = this.make.tilemap({ tileWidth: 16, tileHeight: 16, width: 50, height: 50 });
    var tileset = map.addTilesetImage('tiles');
    layer = map.createBlankDynamicLayer('Layer 1', tileset);

    layer.setScale(3);
    layer.fill(20); // Fill with black tiles

    // Use the array of rooms generated to place tiles in the map
    dungeon.rooms.forEach(function (room) {
        var x = room.x;
        var y = room.y;
        var w = room.width;
        var h = room.height;
        var cx = Math.floor(x + w / 2);
        var cy = Math.floor(y + h / 2);
        var left = x;
        var right = x + (w - 1);
        var top = y;
        var bottom = y + (h - 1);

        // Fill the floor with mostly clean tiles, but occasionally place a dirty tile
        // See "Weighted Ranomize" example for more information on how to use weightedRandomize.
        map.weightedRandomize(x, y, w, h, TILES.FLOOR);

        // Place the room corners tiles
        map.putTileAt(TILES.TOP_LEFT_WALL, left, top);
        map.putTileAt(TILES.TOP_RIGHT_WALL, right, top);
        map.putTileAt(TILES.BOTTOM_RIGHT_WALL, right, bottom);
        map.putTileAt(TILES.BOTTOM_LEFT_WALL, left, bottom);

        // Fill the walls with mostly clean tiles, but occasionally place a dirty tile
        map.weightedRandomize(left + 1, top, w - 2, 1, TILES.TOP_WALL);
        map.weightedRandomize(left + 1, bottom, w - 2, 1, TILES.BOTTOM_WALL);
        map.weightedRandomize(left, top + 1, 1, h - 2, TILES.LEFT_WALL);
        map.weightedRandomize(right, top + 1, 1, h - 2, TILES.RIGHT_WALL);

        // Dunegons have rooms that are connected with doors. Each door has an x & y relative to the
        // room's location
        var doors = room.getDoorLocations();
        for (var i = 0; i < doors.length; i++)
        {
            map.putTileAt(6, x + doors[i].x, y + doors[i].y);
        }

        // Place some random stuff in rooms occasionally
        var rand = Math.random();
        if (rand <= 0.25)
        {
            layer.putTileAt(166, cx, cy); // Chest
        }
        else if (rand <= 0.3)
        {
            layer.putTileAt(81, cx, cy); // Stairs
        }
        else if (rand <= 0.4)
        {
            layer.putTileAt(167, cx, cy); // Trap door
        }
        else if (rand <= 0.6)
        {
            if (room.height >= 9)
            {
                // We have room for 4 towers
                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx - 1, cy + 1);

                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx + 1, cy + 1);

                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx - 1, cy - 2);

                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx + 1, cy - 2);
            }
            else
            {
                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx - 1, cy - 1);

                layer.putTilesAt([
                    [ 186 ],
                    [ 205 ]
                ], cx + 1, cy - 1);
            }
        }
    });

    // Not exactly correct for the tileset since there are more possible floor tiles, but this will
    // do for the example.
    layer.setCollisionByExclusion([ 6, 7, 8, 26 ]);

    // Hide all the rooms
    layer.forEachTile(function (tile) { tile.alpha = 0; });

    // Place the player in the first room
    var playerRoom = dungeon.rooms[0];
    player = this.add.graphics({ fillStyle: { color: 0xedca40, alpha: 1 } })
        .fillRect(0, 0, map.tileWidth * layer.scaleX, map.tileHeight * layer.scaleY);
    player.x = map.tileToWorldX(playerRoom.x + 1);
    player.y = map.tileToWorldY(playerRoom.y + 1);
    setRoomAlpha(playerRoom, 1); // Make the saarting room visible

    // Scroll to the player
    cam = this.cameras.main;
    cam.setBounds(0, 0, layer.width * layer.scaleX, layer.height * layer.scaleY);
    cam.scrollX = player.x - cam.width * 0.5;
    cam.scrollY = player.y - cam.height * 0.5;

    cursors = this.input.keyboard.createCursorKeys();

    var help = this.add.text(16, 16, 'Arrows keys to move.', {
        fontSize: '18px',
        padding: { x: 10, y: 5 },
        backgroundColor: '#000000',
        fill: '#ffffff'
    });
    help.setScrollFactor(0);
}

function update (time, delta)
{
    updatePlayerMovement(time);

    var playerTileX = map.worldToTileX(player.x);
    var playerTileY = map.worldToTileY(player.y);

    // Another helper method from the dungeon - dungeon XY (in tiles) -> room
    var room = dungeon.getRoomAt(playerTileX, playerTileY);

    // If the player has entered a new room, make it visible and dim the last room
    if (room && activeRoom && activeRoom !== room) {
        setRoomAlpha(room, 1);
        setRoomAlpha(activeRoom, 0.5);
    }
    activeRoom = room;

    // Smooth follow the player
    var smoothFactor = 0.9;
    cam.scrollX = smoothFactor * cam.scrollX + (1 - smoothFactor) * (player.x - cam.width * 0.5);
    cam.scrollY = smoothFactor * cam.scrollY + (1 - smoothFactor) * (player.y - cam.height * 0.5);
}

function setRoomAlpha(room, alpha)
{
    map.forEachTile(function (tile) {
        tile.alpha = alpha;
    }, this, room.x, room.y, room.width, room.height)
}

function isTileOpenAt (worldX, worldY)
{
    // nonNull = true, don't return null for empty tiles. This means null will be returned only for
    // tiles outside of the bounds of the map.
    var tile = map.getTileAtWorldXY(worldX, worldY, true);
    if (tile && !tile.collides)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function updatePlayerMovement (time)
{
    var tw = map.tileWidth * layer.scaleX;
    var th = map.tileHeight * layer.scaleY;
    var repeatMoveDelay = 100;

    if (time > lastMoveTime + repeatMoveDelay) {
        if (cursors.down.isDown)
        {
            if (isTileOpenAt(player.x, player.y + th))
            {
                player.y += th;
                lastMoveTime = time;
            }
        }
        else if (cursors.up.isDown)
        {
            if (isTileOpenAt(player.x, player.y - th))
            {
                player.y -= th;
                lastMoveTime = time;
            }
        }

        if (cursors.left.isDown)
        {
            if (isTileOpenAt(player.x - tw, player.y))
            {
                player.x -= tw;
                lastMoveTime = time;
            }
        }
        else if (cursors.right.isDown)
        {
            if (isTileOpenAt(player.x + tw, player.y))
            {
                player.x += tw;
                lastMoveTime = time;
            }
        }
    }
}
