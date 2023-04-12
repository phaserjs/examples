class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('title', 'assets/pics/catastrophi.png');

        this.load.spritesheet('button', 'assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });

        this.load.bitmapFont('nokia', 'assets/fonts/bitmap/nokia16black.png', 'assets/fonts/bitmap/nokia16black.xml');

        this.load.audioSprite('sfx', 'assets/audio/SoundEffects/fx_mixdown.json', [ 'assets/audio/SoundEffects/fx_mixdown.ogg', 'assets/audio/SoundEffects/fx_mixdown.mp3' ]);
    }

    create ()
    {
        this.add.image(400, 300, 'title');

        const spritemap = this.cache.json.get('sfx').spritemap;

        let i = 0;
        for (const spriteName in spritemap)
        {
            if (!spritemap.hasOwnProperty(spriteName))
            {
                continue;
            }

            this.makeButton.call(this, spriteName, 680, 115 + i * 40);

            i++;
        }

        this.input.on('gameobjectover', (pointer, button) =>
        {
            this.setButtonFrame(button, 0);
        });
        this.input.on('gameobjectout', (pointer, button) =>
        {
            this.setButtonFrame(button, 1);
        });
        this.input.on('gameobjectdown', function (pointer, button)
        {
            this.sound.playAudioSprite('sfx', button.name);

            this.setButtonFrame(button, 2);

        }, this);
        this.input.on('gameobjectup', (pointer, button) =>
        {
            this.setButtonFrame(button, 0);
        });
    }

    makeButton (name, x, y)
    {
        const button = this.add.image(x, y, 'button', 1).setInteractive();
        button.name = name;
        button.setScale(2, 1.5);

        const text = this.add.bitmapText(x - 40, y - 8, 'nokia', name, 16);
        text.x += (button.width - text.width) / 2;
    }

    setButtonFrame (button, frame)
    {
        button.frame = button.scene.textures.getFrame('button', frame);
    }
}

/**
 * @author    Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 */

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example,
    pixelArt: true
};

const game = new Phaser.Game(config);
