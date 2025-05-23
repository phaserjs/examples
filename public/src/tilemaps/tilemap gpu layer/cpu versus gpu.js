class Example extends Phaser.Scene
{
    controls;

    preload ()
    {
        this.load.tilemapTiledJSON('map1', 'assets/tilemaps/maps/super-mario.json');
        this.load.image('tiles1', 'assets/tilemaps/tiles/super-mario.png');
    }

    create ()
    {
        const mapCPU = this.make.tilemap({ key: 'map1' });
        const tilesetCPU = mapCPU.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
        const layerCPU = mapCPU.createLayer('World1', tilesetCPU, 0, 0).setScale(2.5);

        const mapGPU = this.make.tilemap({ key: 'map1' });
        const tilesetGPU = mapGPU.addTilesetImage('SuperMarioBros-World1-1', 'tiles1');
        const layerGPU = mapGPU.createLayer('World1', tilesetGPU, 0, 0, true).setScale(2.5).setVisible(false);

        this.mode = 'CPU';

        this.text = this.add.text(16, 16, `Click to switch to ${this.mode === 'CPU' ? 'GPU' : 'CPU'} mode.\nThis tilemap is using the ${this.mode} for rendering.`);

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

        this.cameras.main.setBounds(0, 0, layerCPU.x + layerCPU.width, layerCPU.height * 3);

        this.input.on('pointerdown', () => {
            if (this.mode === 'CPU')
            {
                layerCPU.setVisible(false);
                layerGPU.setVisible(true);
                this.mode = 'GPU';
            }
            else
            {
                layerCPU.setVisible(true);
                layerGPU.setVisible(false);
                this.mode = 'CPU';
            }

            this.text.setText(`Click to switch to ${this.mode === 'CPU' ? 'GPU' : 'CPU'} mode.\nThis tilemap is using the ${this.mode} for rendering.`);
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
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: false,
    scene: Example
};

const game = new Phaser.Game(config);
