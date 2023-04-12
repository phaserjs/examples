class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image({
            key: 'robot',
            url: 'assets/pics/equality-by-ragnarok.png',
            normalMap: 'assets/normal-maps/equality-by-ragnarok_n.png'
        });
    }

    create ()
    {
        const robot = this.add.image(-300, 0, 'robot').setOrigin(0);

        //  The following just displays the normal map on-screen, so you can see that it loaded properly

        const canvasTexture = this.textures.createCanvas('normalMap', 400, 600);

        canvasTexture.context.drawImage(robot.texture.getDataSourceImage(), -300, 0);

        canvasTexture.refresh();

        const robotMap = this.add.image(400, 0, 'normalMap').setOrigin(0);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
