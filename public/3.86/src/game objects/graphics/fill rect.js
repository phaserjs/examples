class Example extends Phaser.Scene
{
    create ()
    {
        const graphics = this.add.graphics();

        for (let i = 0; i < 11; ++i)
        {
            const color = 0xffff00;
            const alpha = 0.5 + ((i / 10) * 0.5);
        
            graphics.fillStyle(color, alpha);
            graphics.fillRect(32 * i, 32 * i, 256, 256);

        }
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
