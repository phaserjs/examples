class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.audio('explosion', 'assets/audio/SoundEffects/explosion.mp3');
        this.load.image('wizball', 'assets/sprites/wizball.png');
    }

    create ()
    {
        const music = this.sound.add('explosion', {volume:1});

        this.add.image(400, 300, 'wizball').setScale(4).setInteractive().addListener('pointerdown',() => {
            const progress = music.seek / music.duration;

            if (progress >= 0.9)
            {
                console.log(music.hasEnded, progress);
            }

            music.play();
        });

        this.progressText = this.add.text(50, 50, '1');

        this.events.addListener('update', () => {
            const progress = music.seek / music.duration;
        //     var rando = Math.random() * (1 - 0.9) + 0.9;
        //     // console.log(rando)
        //     if (progress > rando) {
        //         music.play();
        //     }
            this.progressText.setText(progress);
        });

        //this.sound.pauseOnBlur = true;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
