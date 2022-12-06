class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');
    }

    create ()
    {
        const rt = this.make.renderTexture({ x: 0, y: 0, width: 800, height: 600 }).setOrigin(0, 0);

        const atari = this.add.image(200, 500, 'atlas', 'atari800').setInteractive();
        const mushroom = this.add.image(400, 100, 'atlas', 'mushroom2').setInteractive();
        const car = this.add.image(650, 500, 'atlas', 'supercars-parsec').setInteractive();

        let selected = atari;

        atari.on('pointerdown', function ()
        {
            selected = this;
        });

        mushroom.on('pointerdown', function ()
        {
            selected = this;
        });

        car.on('pointerdown', function ()
        {
            selected = this;
        });

        this.input.on('pointermove', pointer =>
        {
            rt.draw(selected, pointer.x, pointer.y);
        });
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
