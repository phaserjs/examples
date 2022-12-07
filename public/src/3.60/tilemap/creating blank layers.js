class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/tiles/tiles2.png');
    }

    create ()
    {
        // Creating a blank tilemap with the specified dimensions
        const map = this.make.tilemap({ tileWidth: 70, tileHeight: 70, width: 50, height: 50});

        const tiles = map.addTilesetImage('tiles');

        // Each layer needs to get a unique name
        const layer1 = map.createBlankLayer('layer1', tiles);

        // Fill the layer with random tile indexes (where -1 is an empty tile)
        layer1.randomize(0, 0, map.width, map.height, [ -1, 0, 12 ]);

        // Push layer1 back into the "background"
        layer1.setScale(0.75);
        layer1.setScrollFactor(0.5);
        layer1.setAlpha(0.5);

        const layer2 = map.createBlankLayer('layer2', tiles);
        layer2.randomize(0, 0, map.width, map.height, [ -1, 1 ]);

        const cursors = this.input.keyboard.createCursorKeys();
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };
        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

        const help = this.add.text(16, 16, 'Arrows to scroll.', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        help.setScrollFactor(0);
    }

    update (time, delta)
    {
        this.controls.update(delta);
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
