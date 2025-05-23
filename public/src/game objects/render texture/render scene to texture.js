// Render a scene to a DynamicTexture.
class Example extends Phaser.Scene
{
    displayTexture;
    container;

    preload()
    {
        this.load.image('monitor', 'assets/pics/monitor.png');
    }

    create ()
    {
        const sceneRenderTexture = this.add.renderTexture(640, 360, 1280, 720);

        // Texture to copy the scene render, preventing feedback loops.
        const displayTexture = this.add.renderTexture(0, 0, 1280, 720)
            .setScale(0.7)
            .setTint(0xf0f8ff);
        this.displayTexture = displayTexture;

        const monitor = this.add.image(0, 0, 'monitor');

        const container = this.add.container(
            640, 360,
            [ displayTexture, monitor ]
        );
        this.container = container;

        sceneRenderTexture
            .draw(container)
            .preserve(true)
            .setRenderMode('redraw')
            .saveTexture('sceneTexture');

        displayTexture
            .draw('sceneTexture', sceneRenderTexture.x, sceneRenderTexture.y)
            .preserve(true)
            .setRenderMode('all');
    }

    update (time, delta)
    {
        this.displayTexture
            .setRotation(Math.sin(time / 1000) * 0.1)
            .setPosition(Math.sin(time / 1111) * 10, Math.cos(time / 987) * 10)
            .setScale(0.7 + Math.sin(time / 1234) * 0.1);

        this.container
            .setRotation(Math.sin(time / 1010) * 0.1);
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
