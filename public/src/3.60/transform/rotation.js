class Example extends Phaser.Scene
{
    singleImage;
    atlasFrame;

    preload ()
    {

        this.load.image('atari', 'assets/sprites/atari130xe.png');
        this.load.atlas('atlas', 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');

    }

    create ()
    {

        this.atlasFrame = this.add.image(300, 100, 'atlas', 'dragonwiz');
        this.singleImage = this.add.image(300, 300, 'atari');

    }

    update ()
    {

        this.atlasFrame.rotation += 0.01;
        this.singleImage.rotation += 0.01;

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
