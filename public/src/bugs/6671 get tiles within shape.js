class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/iso-64x64-outline.png');
        this.load.image('tiles2', 'assets/tilemaps/iso/iso-64x64-building.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/iso/isorpg.json');
    }

    create ()
    {
        this.overlappingTiles = [];
        this.map = this.add.tilemap('map');

        const tileset1 = this.map.addTilesetImage('iso-64x64-outside', 'tiles');
        const tileset2 = this.map.addTilesetImage('iso-64x64-building', 'tiles2');

        this.layer1 = this.map.createLayer('Tile Layer 1', [ tileset1, tileset2 ]);

        this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x00ff00 } });

        this.radius = 64;
        this.circle = new Phaser.Geom.Circle(400, 300, this.radius);
        this.rectangle = new Phaser.Geom.Rectangle(0, 0, this.radius * 2, this.radius * 2);
        const cursors = this.input.keyboard.createCursorKeys();

        // this.layer1.setScale(2, 2);
        // this.cameras.main.setZoom(2);

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.04,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
        this.input.on('pointermove', this.updateCircle, this);

        this.text = this.add.text(16, 16, '', {
            font: '16px Arial',
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        this.text.setScrollFactor(0);
        console.log(this.text);
    }

    updateCircle ()
    {
        const point = this.input.activePointer.positionToCamera(this.cameras.main);

        this.overlappingTiles.forEach((tile) => { tile.tint = 0xffffff; });
        this.overlappingTiles = [];

        this.circle.setPosition(point.x, point.y);
        this.rectangle.setPosition(point.x - this.radius, point.y - this.radius);
        this.graphics.clear();
        this.graphics.strokeCircleShape(this.circle);
        this.graphics.strokeRectShape(this.rectangle);

        var tiles = this.layer1.getTilesWithinShape(this.circle);
        // var tiles = this.layer1.getTilesWithinShape(this.rectangle);
        tiles.forEach(tile =>
        {
            this.overlappingTiles.push(tile);
        });

        this.overlappingTiles.forEach((tile) => { tile.tint = 0xff0000; });
    }

    update (time, delta)
    {
        this.controls.update(delta);

        const worldPoint = this.input.activePointer.positionToCamera(this.cameras.main);

        const message = [ `Mouse Position: ${worldPoint.x}, ${worldPoint.y}` ];

        const tile = this.map.getTileAtWorldXY(worldPoint.x, worldPoint.y);
        if (tile)
        {
            message.push(`Tile Center Position: ${tile.getCenterX()}, ${tile.getCenterY()}`);
            message.push(`Tile Bounds: ${tile.getLeft()}, ${tile.getTop()} -> ${tile.getRight()}, ${tile.getBottom()}`);
        }

        this.text.setText(message);

        // this.updateCircle(worldPoint);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
