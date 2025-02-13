import SPRITE_KEYS from "../spriteKeys.js";

export class Platform extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, width = 1, height = 1, outer = true)
    {
        const tileWidth = 32;
        const tileHeight = 32;
        const tileHalfWidth = tileWidth * 0.5;
        const tileHalfHeight = tileHeight * 0.5;

        const spriteWidth = width * tileWidth;
        const spriteHeight = height * tileHeight;
        const name = `platform${width}x${height}`;
        let texture;

        if (!scene.textures.exists(name))
        {
            texture = scene.textures.addDynamicTexture(name, spriteWidth, spriteHeight);

            if (width === 1 && height === 1)
            {
                texture.stamp(SPRITE_KEYS.FANTASY_TILES, 6, tileHalfWidth, tileHalfHeight);
            }
            else if (width === 1)
            {
                const topId = 3;
                const midId = 11;
                const bottomId = 19;

                for (let y = 0; y < height; y++)
                {
                    const id = y === 0 ? topId : y === height - 1 ? bottomId : midId;
                    texture.stamp(SPRITE_KEYS.FANTASY_TILES, id, tileHalfWidth, (y * tileHeight) + tileHalfHeight);
                }
            }
            else if (height === 1)
            {
                const leftId = 20;
                const midId = 21;
                const rightId = 22;

                for (let x = 0; x < width; x++)
                {
                    const id = x === 0 ? leftId : x === width - 1 ? rightId : midId;
                    texture.stamp(SPRITE_KEYS.FANTASY_TILES, id, (x * tileWidth) + tileHalfWidth, tileHalfHeight);
                }
            }
            else
            {
                const topId = [0, 1, 2];
                const midId = [8, 9, 10];
                const bottomId = [16, 17, 18];

                for (let y = 0; y < height; y++)
                {
                    for (let x = 0; x < width; x++)
                    {
                        const xId = x === 0 ? 0 : x === width - 1 ? 2 : 1;
                        const id = y === 0 ? topId[xId] : y === height - 1 ? bottomId[xId] : midId[xId];
                        texture.stamp(SPRITE_KEYS.FANTASY_TILES, id, (x * tileWidth) + tileHalfWidth, (y * tileHeight) + tileHalfHeight);
                    }
                }
            }
        }

        super(scene, x, y, name);

        this.setOrigin(0, 0);
        scene.add.existing(this);
        scene.physics.add.existing(this, true); // setting to true makes it static
    }
}