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

        const t = this.add.text(32, 550, 'x: 0 y: 0');

        let x = 0;
        let y = 0;

        this.input.on('pointerdown', pointer => {

            // const p = layer.tileToWorldXY(x, y);

            // this.add.rectangle(p.x, p.y, 4, 4, 0xff0000);

            const p1 = layer.tileToWorldXY(0, 0);
            const p2 = layer.tileToWorldXY(1, 0);
            const p3 = layer.tileToWorldXY(2, 0);
            const p4 = layer.tileToWorldXY(0, 1);
            const p5 = layer.tileToWorldXY(1, 1);
            const p6 = layer.tileToWorldXY(2, 1);
            this.add.rectangle(p1.x, p1.y, 4, 4, 0xff0000);
            this.add.rectangle(p2.x, p2.y, 4, 4, 0xff0000);
            this.add.rectangle(p3.x, p3.y, 4, 4, 0xff0000);
            this.add.rectangle(p4.x, p4.y, 4, 4, 0xff0000);
            this.add.rectangle(p5.x, p5.y, 4, 4, 0xff0000);
            this.add.rectangle(p6.x, p6.y, 4, 4, 0xff0000);


        });

        this.input.keyboard.on('keydown-SPACE', () => {

            const p = layer.tileToWorldXY(x, y);

            this.add.rectangle(p.x, p.y, 4, 4, 0xff0000);

        });

        /*
        this.input.keyboard.on('keydown-LEFT', () => {

            x--;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-RIGHT', () => {

            x++;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-DOWN', () => {

            y++;
            t.setText(`x: ${x} y: ${y}`);

        });

        this.input.keyboard.on('keydown-UP', () => {

            y--;
            t.setText(`x: ${x} y: ${y}`);

        });
        */
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
