class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA', active: true });
    }

    preload ()
    {
        this.load.image('bg', 'assets/ui/undersea-bg.png');
    }

    create ()
    {
        const bg = this.add.image(400, 300, 'bg').setInteractive();

        bg.on('pointerdown', () =>
        {
            console.log('Scene A');
        });
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB', active: true });
    }

    preload ()
    {
        this.load.image('up', 'assets/ui/up-bubble.png');
    }

    create ()
    {
        const button = this.add.image(400, 300, 'up').setInteractive();

        button.on('pointerdown', () =>
        {
            console.log('Scene B');
        });
    }
}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC', active: true });
    }

    preload ()
    {
        this.load.image('down', 'assets/ui/down-bubble.png');
    }

    create ()
    {
        const button = this.add.image(500, 300, 'down').setInteractive();

        button.on('pointerdown', () =>
        {
            console.log('Scene C');
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC ]
};

const game = new Phaser.Game(config);
