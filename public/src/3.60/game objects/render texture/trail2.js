class Example extends Phaser.Scene
{
    player;
    rt;

    preload ()
    {
        this.load.image('dude', 'assets/sprites/phaser-dude.png');
    }

    create ()
    {
        this.rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 });

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

