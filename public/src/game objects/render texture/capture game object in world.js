// Capture a game object in the world to a render texture.
class Example extends Phaser.Scene
{
    shinyball;
    container;

    preload()
    {
        this.load.image('bush1', 'assets/sets/objects/bush1.png');
        this.load.image('bush2', 'assets/sets/objects/bush2.png');
        this.load.image('bush3', 'assets/sets/objects/bush3.png');
        this.load.image('bush4', 'assets/sets/objects/bush4.png');
        this.load.image('tree1', 'assets/sets/objects/tree1.png');
        this.load.image('tree2', 'assets/sets/objects/tree2.png');

        this.load.image('shinyball', 'assets/sprites/shinyball.png');
    }

    create ()
    {
        const width = this.renderer.width;
        const height = this.renderer.height;

        this.shinyball = this.add.image(0, 0, 'shinyball');
        this.container = this.add.container(width / 2, height * 0.85, [ this.shinyball ]);

        for (let i = 0; i < 16; i++)
        {
            this.add.image(
                Phaser.Math.Between(0, width), height,
                'tree' + Phaser.Math.Between(1, 2)
            )
                .setOrigin(0.5, 1)
                .setScale(0.5 + Math.random());
        }

        for (let i = 0; i < 32; i++)
        {
            this.add.image(Phaser.Math.Between(0, width), height, 'bush' + Phaser.Math.Between(1, 4)).setOrigin(0.5, 1);
        }

        const rt = this.add.renderTexture(width / 2, 0, width, height);
        rt
            .clear()
            .capture(this.shinyball, { transform: 'world' })
            .preserve(true)
            .setRenderMode('all');

    }

    update (time, delta)
    {
        // Update the container.
        this.container.x = Math.sin(time / 1000) * 400 + this.renderer.width / 2;
        this.container.y = Math.cos(time / 987) * 50 + this.renderer.height * 0.85;
        this.container.rotation = Math.sin(time / 876) * 0.5;

        // Update the shinyball.
        this.shinyball.x = Math.sin(time / 123) * 32;
        this.shinyball.y = Math.cos(time / 99) * 32;
        this.shinyball.rotation += 0.01;
        this.shinyball.setScale(1 + Math.sin(time / 567) * 0.1);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
