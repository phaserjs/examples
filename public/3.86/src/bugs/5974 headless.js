class MyScene extends Phaser.Scene
{
    constructor()
    {
        super('MyScene');
    }

    create ()
    {
        console.log('MyScene.create');
    }
}

class Demo extends Phaser.Scene
{
    constructor()
    {
        super('Demo');
    }

    create ()
    {
        console.log('Demo.create');

        this.time.delayedCall(500, () => {

            console.log('Add');

            this.scene.add('MyScene', MyScene, true);

        });
    }
}

const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Demo
};

const game = new Phaser.Game(config);
