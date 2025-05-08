// #module

import Scanline from './assets/rendernodes/FilterScanline.js';

export default class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('volcano', 'assets/pics/bw-face.png');
        this.load.image('hotdog', 'assets/sprites/hotdog.png');
    }

    create ()
    {
        this.add.image(400, 300, 'volcano').setAlpha(0.5);
        this.add.image(400, 300, 'hotdog').setScrollFactor(0);

        const scanline = this.cameras.main.filters.external.add(new Scanline.Controller(this.cameras.main));

        this.input.on('pointermove', pointer =>
        {

            scanline.mouseX = pointer.x;
            scanline.mouseY = pointer.y;

        });

        const cursors = this.input.keyboard.createCursorKeys();
        const controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };

        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
    }

    update (time, delta)
    {
        this.controls.update(delta);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Example,
    renderNodes: {
        FilterScanline: Scanline.Filter
    },
};

const game = new Phaser.Game(config);
