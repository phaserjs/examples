class Example extends Phaser.Scene
{
    create ()
    {
        const data = [ 0,20, 84,20, 84,0, 120,50, 84,100, 84,80, 0,80 ];

        const r2 = this.add.polygon(400, 300, data, 0x9966ff).setOrigin(0, 0);

        this.input.on('pointerdown', (pointer) => {

            const x = pointer.worldX - r2.x;
            const y = pointer.worldY - r2.y;

            console.log(r2.geom.contains(x, y));

        });

        console.log(r2);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
