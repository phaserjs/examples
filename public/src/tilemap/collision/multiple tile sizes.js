class Example extends Phaser.Scene
{
    showDebug;
    player;
    debugGraphics;
    cursors;
    text;
    kenny64x64Layer;
    ground32x32Layer;
    tree32x64Layer;
    map;

    preload ()
    {
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/multiple-tile-sizes-collision.json');

        this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
        this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
        this.load.image('kenny_platformer_64x64', 'assets/tilemaps/tiles/kenny_platformer_64x64.png');
        this.load.image('dangerous-kiss', 'assets/tilemaps/tiles/dangerous-kiss.png');

        this.load.image('player', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.map = this.add.tilemap('map');

        const groundTiles = this.map.addTilesetImage('ground_1x1', 'ground_1x1', 32, 32);
        const kennyTiles = this.map.addTilesetImage('kenny_platformer_64x64', 'kenny_platformer_64x64', 64, 64);
        const treeTiles = this.map.addTilesetImage('walls_1x2', 'walls_1x2', 32, 64);

        this.kenny64x64Layer = this.map.createLayer('Kenny 64x64 Layer', kennyTiles);
        this.ground32x32Layer = this.map.createLayer('Ground 32x32 Layer', groundTiles);
        this.tree32x64Layer = this.map.createLayer('Tree 32x64 Layer', treeTiles);

        this.ground32x32Layer.setCollisionByExclusion([ -1 ]);
        this.tree32x64Layer.setCollisionByExclusion([ -1 ]);
        this.kenny64x64Layer.setCollision([ 73 ]);

        this.player = this.physics.add.sprite(700, 100, 'player').setBounce(0.1);

        this.physics.add.collider(this.player, this.tree32x64Layer);
        this.physics.add.collider(this.player, this.ground32x32Layer);
        this.physics.add.collider(this.player, this.kenny64x64Layer);

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

    drawDebug ()
    {
        this.debugGraphics.clear();

        if (this.showDebug)
        {
            this.ground32x32Layer.renderDebug(this.debugGraphics, {
                tileColor: null, // Non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(211, 36, 255, 100), // Colliding tiles
                faceColor: new Phaser.Display.Color(211, 36, 255, 255) // Colliding face edges
            });

            this.kenny64x64Layer.renderDebug(this.debugGraphics, {
                tileColor: null, // Non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(244, 255, 36, 100), // Colliding tiles
                faceColor: new Phaser.Display.Color(244, 255, 36, 255) // Colliding face edges
            });

            this.tree32x64Layer.renderDebug(this.debugGraphics, {
                tileColor: null, // Non-colliding tiles
                collidingTileColor: new Phaser.Display.Color(36, 255, 237, 100), // Colliding tiles
                faceColor: new Phaser.Display.Color(36, 255, 237, 255) // Colliding face edges
            });
        }

        this.updateText();
    }

    updateText ()
    {
        this.text.setText(
            `Arrow keys to move. Space to jump\nPress "C" to toggle debug visuals: ${this.showDebug ? 'on' : 'off'}`
        );
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 576,
    backgroundColor: '#00000',
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 400 }, debug: true }
    },
    scene: Example
};

const game = new Phaser.Game(config);
