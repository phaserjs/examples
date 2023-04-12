class Example extends Phaser.Scene
{

    light;
    offsets = [];
    player;
    layer;
    cursors;

    preload ()
    {
        this.load.image('tiles', [ 'assets/tilemaps/tiles/drawtiles1.png', 'assets/tilemaps/tiles/drawtiles1_n.png' ]);
        this.load.image('car', 'assets/sprites/car90.png');
        this.load.tilemapCSV('map', 'assets/tilemaps/csv/grid.csv');
    }

    create ()
    {
        const map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });

        const tileset = map.addTilesetImage('tiles', null, 32, 32, 1, 2);

        this.layer = map.createLayer(0, tileset, 0, 0).setPipeline('Light2D');

        this.player = this.add.image(32+16, 32+16, 'car');

        this.cursors = this.input.keyboard.createCursorKeys();

        this.light = this.lights.addLight(0, 0, 200).setScrollFactor(0.0);

        this.lights.enable().setAmbientColor(0x555555);

        // this.input.on('pointermove', function (pointer) {

        //     light.x = pointer.x;
        //     light.y = pointer.y;

        // });

        this.lights.addLight(0, 100, 100).setColor(0xff0000).setIntensity(3.0);
        this.lights.addLight(0, 200, 100).setColor(0x00ff00).setIntensity(3.0);
        this.lights.addLight(0, 300, 100).setColor(0x0000ff).setIntensity(3.0);
        this.lights.addLight(0, 400, 100).setColor(0xffff00).setIntensity(3.0);

        this.offsets = [ 0.1, 0.3, 0.5, 0.7 ];
    }

    update ()
    {
        if (this.input.keyboard.checkDown(this.cursors.left, 100))
        {
            const tile = this.layer.getTileAtWorldXY(this.player.x - 32, this.player.y, true);

            if (tile.index === 2)
            {
                //  Blocked, we can't move
            }
            else
            {
                this.player.x -= 32;
                this.player.angle = 180;
            }
        }
        else if (this.input.keyboard.checkDown(this.cursors.right, 100))
        {
            const tile = this.layer.getTileAtWorldXY(this.player.x + 32, this.player.y, true);

            if (tile.index === 2)
            {
                //  Blocked, we can't move
            }
            else
            {
                this.player.x += 32;
                this.player.angle = 0;
            }
        }
        else if (this.input.keyboard.checkDown(this.cursors.up, 100))
        {
            const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y - 32, true);

            if (tile.index === 2)
            {
                //  Blocked, we can't move
            }
            else
            {
                this.player.y -= 32;
                this.player.angle = -90;
            }
        }
        else if (this.input.keyboard.checkDown(this.cursors.down, 100))
        {
            const tile = this.layer.getTileAtWorldXY(this.player.x, this.player.y + 32, true);

            if (tile.index === 2)
            {
                //  Blocked, we can't move
            }
            else
            {
                this.player.y += 32;
                this.player.angle = 90;
            }
        }

        this.light.x = this.player.x;
        this.light.y = this.player.y;


        this.lights.lights.forEach(function (currLight, index) {
            if (this.light !== currLight)
            {
                currLight.x = 400 + Math.sin(this.offsets[index]) * 1000;
                this.offsets[index] += 0.02;
            }
        }, this);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    backgroundColor: '#000000',
    scene: Example
};

const game = new Phaser.Game(config);
