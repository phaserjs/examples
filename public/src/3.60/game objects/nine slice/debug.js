class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('test', 'assets/sprites/128x128.png');
    }

    create ()
    {
        const mesh = this.add.mesh(400, 300, 'test');

        Phaser.Geom.Mesh.GenerateGridVerts({
            mesh,
            widthSegments: 3,
            heightSegments: 1
        });

        mesh.hideCCW = false;

        mesh.panZ(3.5);

        console.log('wh', mesh.width, mesh.height);
        console.log('viewPos', mesh.viewPosition);
        console.log('modelRot', mesh.modelRotation);
        console.log('modelPos', mesh.modelPosition);
        console.log('modelSc', mesh.modelScale);

        // this.modelRotation,
        // this.modelPosition,
        // this.modelScale,

        console.log(mesh.vertices);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0a440a',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
