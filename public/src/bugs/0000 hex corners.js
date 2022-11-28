class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('tiles', 'assets/tilemaps/iso/tilesets/hex-tiles.png');
        this.load.tilemapTiledJSON('map', 'assets/tilemaps/hex/10x10-test.json');
    }

    create ()
    {
        const map = this.add.tilemap('map');

        const tileset = map.addTilesetImage('hex-tiles', 'tiles');

        const layer = map.createLayer('Tile Layer 1', tileset);

        layer.setAlpha(0.2);

        // layer.setScale(2.8, 1.4);

        const cursors = this.input.keyboard.createCursorKeys();

        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 0.7
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);

        const g = this.add.graphics();

        g.lineStyle(2, 0x00ff00);

        const t = this.add.text(32, 550, 'x: 0 y: 0');

        let x = 0;
        let y = 0;

        this.input.on('pointerdown', pointer => {

            const corners = layer.getTileCorners(x, y);

            g.moveTo(corners[0].x, corners[0].y);

            g.beginPath();

            corners.forEach(corner => {

                g.lineTo(corner.x, corner.y);

            });

            g.closePath();
            g.strokePath();

        });

        this.input.keyboard.on('keydown-SPACE', () => {

            const p = layer.tileToWorldXY(x, y);

            this.add.rectangle(p.x, p.y, 4, 4, 0xff0000);

        });

        this.input.keyboard.on('keydown-A', () => {

            x--;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-D', () => {

            x++;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-S', () => {

            y++;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-W', () => {

            y--;
            t.setText(`x: ${x} y: ${y}`);

        });
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
