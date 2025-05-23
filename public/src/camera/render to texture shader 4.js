// #module
import Plasma from './assets/rendernodes/FilterPlasma.js';

export default class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('volcano', 'assets/pics/remember-me.jpg');
        this.load.image('hotdog', 'assets/sprites/hotdog.png');
    }
    create ()
    {
        this.add.image(400, 300, 'volcano').setAlpha(0.2);
        this.add.image(400, 300, 'hotdog').setScrollFactor(0);

        this.cameras.main.filters.external.add(new Plasma.Controller(this.cameras.main));

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
        time += 0.005;
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
        FilterPlasma: Plasma.Filter
    },
}

const game = new Phaser.Game(config);
