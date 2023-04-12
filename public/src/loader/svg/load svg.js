class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.svg('pencil', 'assets/svg/pencil.svg');
        this.load.svg('cartman', 'assets/svg/cartman.svg');
        this.load.svg('fireflower', 'assets/svg/fireflower.svg');

        // this.load.svg({ key: 'pencil', file: 'assets/svg/pencil.svg' });
        // this.load.svg({ key: 'cartman', file: 'assets/svg/cartman.svg' });

        // this.load.setPath('assets/svg');

        // this.load.svg([
        //     { key: 'pencil' },
        //     { key: 'cartman' },
        // ]);
    }

    create ()
    {
        this.add.image(400, 300, 'fireflower');
        this.add.image(400, 300, 'pencil');
        this.add.image(150, 300, 'cartman');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#efefef',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
