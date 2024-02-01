// #module
import { spookyJSON, spookyPNG } from '../../../assets/base64/spooky-atlas.js';

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('spooky', spookyPNG, spookyJSON);
    }

    create ()
    {
        const atlasTexture = this.textures.get('spooky');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(100, 700);
            const y = Phaser.Math.Between(100, 500);

            this.add.image(x, y, 'spooky', frames[i]);
        }
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
