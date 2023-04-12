class Example extends Phaser.Scene
{
    coinsCollected = 0;
    coinLayer;
    groundLayer;
    showDebug = false;
    player;
    text;
    debugGraphics;
    cursors;
    map;

    preload ()
    {
        this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
        this.load.spritesheet('coin', 'assets/sprites/coin.png', { frameWidth: 32, frameHeight: 32 });
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/tile-collision-test.json');
        this.load.image('player', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.map = this.make.tilemap({ key: 'map' });
        const groundTiles = this.map.addTilesetImage('ground_1x1');
        const coinTiles = this.map.addTilesetImage('coin');

        this.map.createLayer('Background Layer', groundTiles, 0, 0);
        this.groundLayer = this.map.createLayer('Ground Layer', groundTiles, 0, 0);
        this.coinLayer = this.map.createLayer('Coin Layer', coinTiles, 0, 0);

        this.groundLayer.setCollisionBetween(1, 25);

        // This will set Tile ID 26 (the coin tile) to call the function "hitCoin" when collided with
        this.coinLayer.setTileIndexCallback(26, this.hitCoin, this);

        // This will set the map location (2, 0) to call the function "hitSecretDoor" Un-comment this to
        // be jump through the ceiling above where the player spawns. You can use this to create a
        // secret area.
        this.groundLayer.setTileLocationCallback(2, 0, 1, 1, this.hitSecretDoor, this);

        this.player = this.physics.add.sprite(80, 70, 'player')
            .setBounce(0.1);

        // We want the player to physically collide with the ground, but the coin layer should only
        // trigger an overlap so that collection a coin doesn'td kill player movement.
        this.physics.add.collider(this.player, this.groundLayer);
        this.physics.add.overlap(this.player, this.coinLayer);

        this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
        this.cameras.main.startFollow(this.player);

        this.debugGraphics = this.add.graphics();

        this.input.keyboard.on('keydown-C', event =>
        {
            this.showDebug = !this.showDebug;
            this.drawDebug();
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.text = this.add.text(16, 16, '', {
            fontSize: '20px',
            fill: '#ffffff'
        });
        this.text.setScrollFactor(0);
        this.updateText();
    }

    update (time, delta)
    {
        // Horizontal movement
        this.player.body.setVelocityX(0);
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(200);
        }

        // Jumping
        if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor())
        {
            this.player.body.setVelocityY(-300);
        }
    }

    hitCoin (sprite, tile)
    {
        this.coinLayer.removeTileAt(tile.x, tile.y);
        this.coinsCollected += 1;
        this.updateText();

        // Return true to exit processing collision of this tile vs the sprite - in this case, it
        // doesn't matter since the coin tiles are not set to collide.
        return false;
    }

    hitSecretDoor (sprite, tile)
    {
        tile.alpha = 0.25;

        // Return true to exit processing collision of this tile vs the sprite - here, we want to allow
        // the player jump "through" the block and not collide.
        return true;
    }

    drawDebug ()
    {
        this.debugGraphics.clear();

        if (this.showDebug)
        {
            // Pass in null for any of the style options to disable drawing that component
            this.groundLayer.renderDebug(this.debugGraphics, {
                tileColor: null, // Non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
                faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
            });
        }

        this.updateText();
    }

    updateText ()
    {
        this.text.setText(
            `Arrow keys to move. Space to jump\nPress "C" to toggle debug visuals: ${this.showDebug ? 'on' : 'off'}\nCoins collected: ${this.coinsCollected}`
        );
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 576,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 } }
    },
    scene: Example
};

const game = new Phaser.Game(config);
