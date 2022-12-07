class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = 'assets/animations/aseprite/';

        this.load.aseprite('paladin', 'paladin.png', 'paladin.json');
    }

    create ()
    {
        const tags = this.anims.createFromAseprite('paladin');

        const sprite = this.add.sprite(500, 300).play({ key: 'Magnum Break', repeat: -1 }).setScale(6);

        for (let i = 0; i < tags.length; i++)
        {
            const label = this.add.text(32, 32 + (i * 16), tags[i].key, { color: '#00ff00' });

            label.setInteractive();
        }

        this.input.on('gameobjectdown', (pointer, obj) =>
        {

            sprite.play({
                key: obj.text,
                repeat: -1
            });

        });

        this.input.on('gameobjectover', (pointer, obj) =>
        {

            obj.setColor('#ff00ff');

        });

        this.input.on('gameobjectout', (pointer, obj) =>
        {

            obj.setColor('#00ff00');

        });
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
