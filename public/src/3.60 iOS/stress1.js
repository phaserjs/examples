class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.sprites = 0;
    }

    preload ()
    {
        this.load.atlas('atlas', 'assets/atlas/megaset-1.png', 'assets/atlas/megaset-1.json');
    }

    create ()
    {
        this.debug = this.add.text(128, 16).setDepth(1);

        this.addShips();

        this.input.on('pointerdown', () => this.addShips());
    }

    addShips ()
    {
        for (let i = 0; i < 32; i++)
        {
            const x = Phaser.Math.Between(0, 800);
            const y = Phaser.Math.Between(600, 1200);

            const ship = this.add.image(x, y, 'atlas', 'ship');

            this.tweens.add({
                targets: ship,
                y: '-=1200',
                duration: 3000,
                repeat: -1
            });

            this.sprites++;
        }

        this.debug.setText([
            'Pipeline: ' + this.debug.getPipelineName(),
            'Sprites: ' + this.sprites
        ]);
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#02023d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
