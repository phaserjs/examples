class Example extends Phaser.Scene
{
    spriteGPULayer;

    preload ()
    {
        this.load.path = 'assets/animations/aseprite/';

        this.load.aseprite('paladin', 'paladin.png', 'paladin.json');
    }

    create ()
    {
        const tags = this.anims.createFromAseprite('paladin');

        const size = this.renderer.height + 128;

        this.spriteGPULayer = this.add.spriteGPULayer('paladin', size);
        const spriteGPULayer = this.spriteGPULayer;

        // Generate animation data in the layer:
        spriteGPULayer.setAnimations(tags);

        // Create a data template.
        const abSize = spriteGPULayer.getDataByteSize(); // Or 168, at time of coding.
        const ab = new ArrayBuffer(abSize);
        const u32 = new Uint32Array(ab);
        const f32 = new Float32Array(ab);


        // Set non-zero template properties.

        // Scale X
        f32[12] = 1;

        // Scale Y
        f32[16] = 1;

        // Alpha
        f32[20] = 1;

        // Frame index animation ease and delay
        f32[27] = spriteGPULayer.EASE.Linear;
        // Note: the delay is added to the ease as `delay / duration`, but here it's 0.

        // VERY IMPORTANT: Enable the ease type.
        spriteGPULayer.setAnimationEnabled('Linear', true);

        // Tint blend (enables tinting)
        f32[28] = 1;

        // Tint+alpha bottom-left, top-left, bottom-right, top-right
        u32[32] = 0xffffffff;
        u32[33] = 0xffffffff;
        u32[34] = 0xffffffff;
        u32[35] = 0xffffffff;

        // Origin X
        f32[36] = 0.5;

        // Origin Y
        f32[37] = 0.5;

        // Scroll factor X
        f32[40] = 1;

        // Scroll factor Y
        f32[41] = 1;

        // Alternatively, set the entire template from an array:
        /*
        f32.set([
            0, 0, 0, 0, // position X
            0, 0, 0, 0, // position Y
            0, 0, 0, 0, // rotation
            1, 0, 0, 0, // scale X
            1, 0, 0, 0, // scale Y
            1, 0, 0, 0, // alpha
            0, 0, 0, spriteGPULayer.EASE.Linear, // frame index
            1, 0, 0, 0, // tint blend
            0, 0, 0, 0, // tint bottom-left, top-left, bottom-right, top-right
            0.5, 0.5, 0, 0, // origin X, Y, tintFill, creationTime
            1, 1 // scroll factor X, Y
        ]);
        // Set the tint colors as Uint32Array, because float32 doesn't support these values.
        u32[32] = 0xffffffff;
        u32[33] = 0xffffffff;
        u32[34] = 0xffffffff;
        u32[35] = 0xffffffff;
        */


        // Populate the scene.
        for (let y = 0; y < size; y++)
        {
            const anim = Phaser.Utils.Array.GetRandom(tags);
            const animData = spriteGPULayer.animationDataNames[anim.key];

            // Frame index animation: [base, amplitude, duration] = [index, frameCount, duration]
            f32[24] = animData.index;
            f32[25] = animData.frameCount;
            f32[26] = animData.duration;
            // Note: set duration to negative to enable yoyo.

            // X
            f32[0] = Math.random() * this.renderer.width;

            // Y
            f32[4] = y;

            spriteGPULayer.addData(f32);
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
