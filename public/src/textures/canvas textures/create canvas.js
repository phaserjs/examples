class Example extends Phaser.Scene
{
    texture;

    create ()
    {
        this.texture = this.textures.createCanvas('gradient', 16, 256);

        //  We can access the underlying Canvas context like this:
        const grd = this.texture.context.createLinearGradient(0, 0, 0, 256);

        grd.addColorStop(0, '#8ED6FF');
        grd.addColorStop(1, '#004CB3');

        this.texture.context.fillStyle = grd;
        this.texture.context.fillRect(0, 0, 16, 256);

        //  Call this if running under WebGL, or you'll see nothing change
        this.texture.refresh();

        //  Add a bunch of images that all use the same texture
        for (let i = 0; i < 64; i++)
        {
            const image = this.add.image(8 + i * 16, 0, 'gradient');

            this.tweens.add({
                targets: image,
                y: 650,
                duration: 2000,
                ease: 'Quad.easeInOut',
                delay: i * 62.5,
                yoyo: true,
                repeat: -1
            });
        }

        this.time.addEvent({ delay: 4000, callback: this.updateTexture, callbackScope: this, loop: true });
    }

    updateTexture ()
    {
        const grd = this.texture.context.createLinearGradient(0, 0, 0, 256);

        grd.addColorStop(0, this.generateHexColor());
        grd.addColorStop(1, this.generateHexColor());

        this.texture.context.fillStyle = grd;
        this.texture.context.fillRect(0, 0, 16, 256);

        //  Call this if running under WebGL, or you'll see nothing change
        this.texture.refresh();
    }

    generateHexColor ()
    {
        return `#${((0.5 + 0.5 * Math.random()) * 0xFFFFFF << 0).toString(16)}`;
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
