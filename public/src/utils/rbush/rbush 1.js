class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('ship', 'assets/sprites/phaser-ship.png');
    }

    create ()
    {
        //  Create an RTree

        const tree = new Phaser.Structs.RTree();

        for (let i = 0; i < 512; i++)
        {
            const ship = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 590), 'ship');

            const bounds = ship.getBounds();

            //  Insert our entry into the RTree:
            tree.insert({ left: bounds.left, right: bounds.right, top: bounds.top, bottom: bounds.bottom, sprite: ship });
        }

        const debug = this.add.graphics();

        debug.lineStyle(1, 0x00ff00);

        let results = [];

        this.input.on('pointermove', pointer =>
        {

            //  First clear the previous results
            results.forEach(entry =>
            {

                entry.sprite.setTint(0xffffff);

            });

            debug.clear();

            //  Update the search area

            const bbox = {
                minX: pointer.x - 100,
                minY: pointer.y - 100,
                maxX: pointer.x + 100,
                maxY: pointer.y + 100
            };

            //  Search the RTree

            results = tree.search(bbox);

            //  Set Tint on intersecting Sprites

            results.forEach(entry =>
            {

                entry.sprite.setTint(0xff0000);

            });

            //  Draw debug

            debug.strokeRect(bbox.minX, bbox.minY, 200, 200);

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
