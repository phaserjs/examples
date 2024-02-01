// #module
import { blockPNG } from '../../../assets/base64/block-image.js';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', blockPNG);
    }

    create ()
    {
        this.add.image(400, 300, 'block');
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
