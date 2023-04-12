class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space3.png');
        this.load.video('astronaut', 'assets/video/astronaut.webm', true);
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        const intro = this.add.video(400, 300, 'astronaut');

        intro.on('locked', () => {

            let message = this.add.text(400, 100, 'Click to play video', { font: '32px Courier', fill: '#00ff00' }).setShadow(1, 1).setOrigin(0.5);

            intro.on('unlocked', () => {

                message.destroy();

            });

        });

        let loops = 0;
        let counter = this.add.text(400, 550, 'Loops: 0', { font: '32px Courier', fill: '#ffffff' }).setOrigin(0.5);

        intro.on('loop', () => {

            loops++;

            counter.setText('Loops: ' + loops);

        });

        intro.play(true);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00002d',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
