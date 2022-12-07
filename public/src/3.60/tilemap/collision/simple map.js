class Example extends Phaser.Scene
{
    cursors;
    pickups;
    player;
    layer;
    tileset;
    map;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/gridtiles.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/simple-map.json');
        this.load.image('player', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
        this.tileset = this.map.addTilesetImage('tiles');
        this.layer = this.map.createLayer('Level1', this.tileset);

        this.map.setCollision([ 20, 48 ]);

        this.pickups = this.map.filterTiles(tile => tile.index === 82);

        this.player = this.add.rectangle(96, 96, 24, 38, 0xffff00);

        this.physics.add.existing(this.player);

        this.physics.add.collider(this.player, this.layer);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cursors.up.on('down', () =>
        {
            if (this.player.body.blocked.down)
            {
                this.player.body.setVelocityY(-360);
            }
        }, this);
    }

    update ()
    {
        this.player.body.setVelocityX(0);

        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(200);
        }

        this.physics.world.overlapTiles(this.player, this.pickups, this.hitPickup, null, this);
    }

    hitPickup (player, tile)
    {
        this.map.removeTile(tile, 29, false);

        this.pickups = this.map.filterTiles(tile => tile.index === 82);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
