class Example extends Phaser.Scene
{
    noise;

    create()
    {
        const { width, height } = this.scale;

        this.noise = this.add.noise({}, width / 2, height / 2, width, height);

        this.time.addEvent(
            {
                delay: 1000,
                loop: true,
                callback: () => this.noise.noiseOffset = [
                    Math.random(),
                    Math.random()
                ]
            }
        );
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example
};

const game = new Phaser.Game(config);
