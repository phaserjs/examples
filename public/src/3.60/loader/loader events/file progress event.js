class Example extends Phaser.Scene
{
    preload ()
    {
        this.add.image(400, 300, 'bear').setScale(2);

        const progress = this.add.graphics();

        this.load.on('fileprogress', (file, value) =>
        {

            if (file.key === 'goldrunner')
            {
                progress.clear();
                progress.fillStyle(0xffffff, 0.4);
                progress.fillRect(450, 500 - (value * 400), 200, value * 400);
            }

        });

        this.load.on('complete', () =>
        {

            progress.destroy();

        });

        this.load.audio('goldrunner', 'assets/audio/Scyphe-Goldrunner_(Maccie_Pimp_Me Up_Remix).mp3');
    }

    create ()
    {
        const music = this.sound.add('goldrunner');

        music.play();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);
