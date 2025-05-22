// #module

import HueRotate from './assets/rendernodes/FilterHueRotate.js';

export default class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('spaceman', 'assets/sprites/exocet_spaceman.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('elephant', 'assets/sprites/elephant.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo-small.png');
    }

    create ()
    {
        const layer = this.add.layer();

        //  These 3 sprites are in the Layer

        layer.add(this.make.sprite({ x: 150, y: 300, key: 'spaceman' }, false));
        layer.add(this.make.sprite({ x: 400, y: 300, key: 'bunny' }, false));
        layer.add(this.make.sprite({ x: 650, y: 300, key: 'elephant' }, false));

        layer.enableFilters().filters.external.add(new HueRotate.Controller(layer));

        //  And this one is not
        this.add.sprite(400, 50, 'logo');

        this.input.on('pointerdown', () =>
        {

            layer.visible = !layer.visible;

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
    renderNodes: {
        FilterHueRotate: HueRotate.Filter,
    }
};

const game = new Phaser.Game(config);
