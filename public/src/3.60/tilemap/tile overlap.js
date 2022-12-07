class Example extends Phaser.Scene
{
    cursors;
    player;

    preload ()
    {
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tile_properties.json');
        this.load.image('tiles', 'assets/tilemaps/tiles/gridtiles.png');
        this.load.image('ball', 'assets/sprites/orb-blue.png');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('tiles');
        const layer = map.createLayer('Tile Layer 1', tileset, 0, 0);

        map.setCollision([ 34, 20 ]); // 20 = dark gray, 32 = dark blue
        // map.setCollision([ 136 ]); // dark brown
        // map.setCollision([ 80 ]); // yellow
        // map.setCollision([ 122 ]); // light brown

        this.player = this.physics.add.sprite(48, 48, 'ball');

        this.physics.add.collider(this.player, layer);

        // this.physics.add.collider(player, layer, () => {
        //     console.log('colliding');
        // });

        // this.physics.add.overlap(player, layer, () => {
        //     console.log('overlapping');
        // });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update (time, delta)
    {
        this.player.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-100);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(100);
        }

        // Vertical movement
        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-100);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(100);
        }
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
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
