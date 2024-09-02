class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ayu', 'assets/pics/ayu.png');
    }

    create ()
    {
        var cnt = 10;

        for(var i = 0; i < cnt; i++) {
            for(var j = 0; j < cnt; j++) {        
                const mesh = this.add.mesh(50 + i * 100, 50 + j  * 100, 'ayu');
                Phaser.Geom.Mesh.GenerateGridVerts({
                    mesh,
                    widthSegments: 10
                });
                mesh.hideCCW = false;
                mesh.panZ(20);
            }
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example,
    batchSize: 512,
};

let game = new Phaser.Game(config);