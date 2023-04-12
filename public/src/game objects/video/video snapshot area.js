// #module
import Button from '../../libs/ui/Button.js';

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.video('spaceace', 'assets/video/spaceace.mp4', true);
        this.load.atlas('ui', 'assets/ui/dark-ui.png', 'assets/ui/dark-ui.json');
    }

    create ()
    {
        const intro = this.add.video(0, 0, 'spaceace').setOrigin(0);

        intro.play(true);

        const grabImage = this.add.image(32, 32).setOrigin(0);

        const area = this.add.rectangle(0, 0, 320, 180).setStrokeStyle(1, 0x00ff00);

        this.input.on('pointermove', (pointer) => {

            const x = Phaser.Math.Clamp(pointer.x, 160, 1120);
            const y = Phaser.Math.Clamp(pointer.y, 90, 630);

            area.setPosition(x, y);

        });

        this.input.on('pointerdown', (pointer) => {

            const x = Phaser.Math.Clamp(pointer.x, 160, 1120);
            const y = Phaser.Math.Clamp(pointer.y, 90, 630);

            area.setPosition(x, y);

            let snap = intro.snapshotArea(area.x - 160, area.y - 90, 320, 180);

            grabImage.setTexture(snap);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    antialiasGL: false,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
