class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.audio('theme', [
            'assets/audio/gemattack-maintheme.m4a'
        ]);

        this.load.image('speaker', 'assets/sprites/speakers/middle.png');
    }

    create ()
    {
        this.image = this.add.image(400, 400, 'speaker');

        this.music = this.sound.add('theme');

        this.sound.setListenerPosition(400, 300);

        this.text = this.add.text(400, 100, 'Loading...', {
            fontFamily: 'serif',
            fontSize: 40,
            color: '#fff',
            align: 'center'
        });

        this.text.setOrigin(0.5);

        this.add.rectangle(400, 300, 4, 4, 0xff0000);

        this.enableInput(this);
    }

    enableInput ()
    {
        this.text.setText('Click to start');

        this.input.once('pointerdown', () => {

            this.music.play({
                loop: true,
                source: {
                    x: 400,
                    y: 300,
                    refDistance: 50,
                    follow: this.image
                }
            });

            this.input.on('pointermove', pointer => {

                this.image.x = pointer.worldX;
                this.image.y = pointer.worldY;

                this.text.setText(`Audio source at x: ${pointer.worldX} y: ${pointer.worldY}`);

            });

        });

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
