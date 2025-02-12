export class Platform extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, width)
    {
        const name = `platform${width}`;
        let texture;

        if (!scene.textures.exists(name))
        {
            texture = scene.textures.addDynamicTexture(name, width, 32);

            // left of platform
            texture.stamp('fantasy', 20, 16, 16);
            // middle of platform
            for (let i = 48; i < width-32; i += 32)
            {
                texture.stamp('fantasy', 21, i, 16);
            }
            // // right of platform
            texture.stamp('fantasy', 22, width - 16, 16);
        }

        super(scene, x, y, name);

        scene.add.existing(this);
        scene.physics.add.existing(this, true); // setting to true makes it static
    }
}