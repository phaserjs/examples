class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlasXML('round', 'assets/atlas/round.png', 'assets/atlas/round.xml');
    }

    create ()
    {
        const atlasTexture = this.textures.get('round');

        const frames = atlasTexture.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(0, 600);

            this.add.image(x, y, 'round', frames[i]);
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
