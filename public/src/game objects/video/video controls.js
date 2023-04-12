// #module
import Button from '../../libs/ui/Button.js';
import HorizontalSlider from '../../libs/ui/HorizontalSlider.js';

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.t;
        this.video;
        this.slider;
    }

    preload ()
    {
        this.load.atlas('ui', 'assets/ui/dark-ui.png', 'assets/ui/dark-ui.json');
        this.load.video('fireworks', 'assets/video/fireworks.mp4', true);
    }

    create ()
    {
        this.video = this.add.video(400, 300, 'fireworks').setLoop(true);

        this.t = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' }).setShadow(1, 1);

        const button = new Button({
            scene: this,
            x: 400,
            y: 480,
            texture: 'ui',
            label: {
                text: 'Play',
                font: 'Arial',
                color: '#ffffff',
                size: 24
            },
            out: 'button-active',
            over: {
                background: 'button-over',
                label: { color: '#ffff00' }
            },
            down: {
                background: 'button-down',
                label: { color: '#ff0000' }
            }
        });

        button.on('pointerdown', () => {

            if (this.video.isPlaying())
            {
                this.video.setPaused(true);

                button.setLabel('Resume');

            }
            else if (this.video.isPaused())
            {
                this.video.setPaused(false);

                button.setLabel('Pause');
            }
            else
            {
                this.video.play(true);

                button.setLabel('Pause');
            }

        });

        this.slider = new HorizontalSlider({
            scene: this,
            x: 400,
            y: 500,
            texture: 'ui',
            min: 0,
            max: 1,
            track: {
                emptyFrame: 'track-empty',
                fullFrame: 'track-red',
                y: 55
            },
            slider: {
                upFrame: 'slider-white',
                downFrame: 'slider-red',
                y: 32,
                left: 8,
                right: 542
            },
        });

        this.slider.on('update', (slider, value) => {

            if (this.video.isPaused())
            {
                this.video.seekTo(value);
            }

        });
    }

    update ()
    {
        this.t.setText(this.video.getProgress());

        if (this.video.isPlaying())
        {
            this.slider.setSlider(this.video.getProgress());
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
