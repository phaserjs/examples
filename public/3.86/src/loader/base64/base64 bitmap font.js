// #module
import { carrierCommandFont, carrierCommandXML } from '../../../assets/base64/carrier-command-font.js';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.bitmapFont('carrier', carrierCommandFont, carrierCommandXML);
    }

    create ()
    {
        this.add.bitmapText(64, 200, 'carrier', 'Bitmap Fonts\nloading via base64\nin Phaser 3');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
