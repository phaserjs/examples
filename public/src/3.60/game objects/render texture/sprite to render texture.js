class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('bubble', 'assets/particles/bubble.png');
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        const bubble = this.add.image(0, 0, 'bubble');
        const dude = this.add.image(0, 0, 'dude');

        const rt = this.add.renderTexture(400, 300, 64, 64);

        rt.draw(bubble, 32, 32);
        rt.draw(dude, 32, 32);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
