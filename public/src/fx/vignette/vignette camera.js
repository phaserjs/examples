class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/textures/grass.jpg');
        this.load.atlas('glade', 'assets/atlas/glade.png', 'assets/atlas/glade.json');
    }

    create ()
    {
        this.add.image(400, 300, 'bg').setScale(1.0).setScrollFactor(0, 0);

        const grass = this.add.layer();

        const trees = [ 'Spruce-1', 'Spruce-2', 'Spruce-3', 'Spruce-5', 'Spruce-6', 'Flower_2' ];

        for (let i = 0; i < 128; i++)
        {
            let x = Phaser.Math.Between(0, 800);
            let y = Phaser.Math.Between(100, 600 * 4);

            let frame = Phaser.Utils.Array.GetRandom(trees);

            let tree = this.add.image(x, y, 'glade', frame);

            tree.setDepth(y);
            tree.setOrigin(0.5, 1);

            grass.add(tree);
        }

        const camera = this.cameras.main;

        camera.postFX.addVignette(0.5, 0.5, 0.7);

        this.tweens.add({
            targets: camera,
            scrollY: 1800,
            duration: 20000,
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
