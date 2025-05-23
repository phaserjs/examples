class Example extends Phaser.Scene
{
    spriteGPULayer;
    xSpacing = 32;
    ySpacing = 16;
    nextCameraY = 0;

    preload ()
    {
        this.load.image('crate32', 'assets/sprites/crate32.png');
    }

    create ()
    {
        this.spriteGPULayer = this.add.spriteGPULayer(
            'crate32',
            (1 + this.renderer.width / this.xSpacing) * (2 + this.renderer.height / this.ySpacing)
        );

        for (let y = this.renderer.height + 16; y > -16; y -= this.ySpacing)
        {
            this.createCrateRow(y);
        }

        this.cameras.main.filters.internal.addTiltShift();
    }

    update ()
    {
        this.cameras.main.scrollY -= 1;
        if (this.cameras.main.scrollY < this.nextCameraY)
        {
            this.nextCameraY = this.cameras.main.scrollY - this.ySpacing;
            this.createCrateRow(this.nextCameraY);
        }
    }

    createCrateRow (y)
    {
        for (
            let x = 0;
            x < this.renderer.width + this.xSpacing;
            x += this.xSpacing
        )
        {
            // Ordinarily, we wouldn't want to create new objects for every member.
            // It's more efficient to reuse a single object and update its properties,
            // or use raw data and update the buffer directly.
            // This example is for illustrative purposes only.
            const memberConfig = {
                x: x + Math.random() * 4,
                y: y + Math.random() * 16,
                rotation: (Math.random() - 0.5) * 0.2,
                scaleX: 1 + Math.random() * 0.5,
                scaleY: 1 + Math.random() * 0.5,
                tintTopRight: 0xaabbcc,
                tintBottomLeft: 0xaabbcc,
                tintBottomRight: 0x778899
            };
            this.spriteGPULayer.insertMembers(0, memberConfig);
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 1280,
    height: 720,
    scene: Example,
    backgroundColor: '#202020'
};

const game = new Phaser.Game(config);
