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
        const intro = this.add.video(0, 0, 'spaceace').setScale(0.5).setOrigin(0);

        intro.play(true);

        const speed1 = new Button({
            scene: this, texture: 'ui',
            x: 1152, y: 410,
            label: {
                text: 'x2 Speed',
                font: 'Arial', color: '#ffffff', size: 22
            },
            out: 'button-active',
            over: 'button-over',
            down: 'button-down'
        });

        speed1.on('pointerdown', () => {

            intro.setPlaybackRate(2);

        });

        const speed2 = new Button({
            scene: this, texture: 'ui',
            x: 928, y: 410,
            label: {
                text: 'x1 Speed',
                font: 'Arial', color: '#ffffff', size: 22
            },
            out: 'button-active',
            over: 'button-over',
            down: 'button-down'
        });

        speed2.on('pointerdown', () => {

            intro.setPlaybackRate(1);

        });

        const speed3 = new Button({
            scene: this, texture: 'ui',
            x: 704, y: 410,
            label: {
                text: 'x0.5 Speed',
                font: 'Arial', color: '#ffffff', size: 22
            },
            out: 'button-active',
            over: 'button-over',
            down: 'button-down'
        });

        speed3.on('pointerdown', () => {

            intro.setPlaybackRate(0.5);

        });

        // const grabImage = this.add.image(640, 0).setScale(0.5).setOrigin(0);
        const grabImage = this.add.image(640, 0).setOrigin(0);

        const grab = new Button({
            scene: this, texture: 'ui',
            x: 128, y: 410,
            label: {
                text: 'Take Snapshot',
                font: 'Arial', color: '#ffffff', size: 22
            },
            out: 'button-active',
            over: 'button-over',
            down: 'button-down'
        });

        grab.on('pointerdown', () => {

            let snap = intro.snapshot(1280 / 2, 720 / 2);

            grabImage.setTexture(snap);

        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 470,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
