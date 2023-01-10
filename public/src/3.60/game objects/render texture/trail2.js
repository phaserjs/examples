class Example extends Phaser.Scene
{
    rt;
    player;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.add.renderTexture(0, 0, 800, 600).setOrigin(0, 0);

        this.player = this.add.image(256, 256, 'dude');
        this.player.setOrigin(0.5, 0.5);
    }

    update ()
    {
        this.player.setPosition(this.input.x, this.input.y);

        this.rt.draw(this.player);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
