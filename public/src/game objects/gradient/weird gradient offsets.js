class Example extends Phaser.Scene
{
    create ()
    {
        // Bilinear offset is mirrored.
        const bilinear = this.add.gradient({
            repeatMode: 2, // SAWTOOTH
            shapeMode: 1, // BILINEAR
            start: { x: 0.5, y: 0.5 },
            shape: { x: 0.1, y: 0 },
            bands: {
                colorStart: 0xcccccc,
                colorEnd: 0x8899cc,
            }
        }, 640, 360, 1280, 720);
        this.bilinear = bilinear;

        // Symmetric conic offset is kaleidoscopic,
        // as the offset shifts the symmetry point.
        const conicSymmetric = this.add.gradient({
            repeatMode: 2, // SAWTOOTH
            shapeMode: 3, // CONIC_SYMMETRIC
            start: { x: 0.5, y: 0.5 },
            shape: { x: 1, y: 0 },
            bands: {
                colorStart: 0xff8844,
                colorEnd: 0x8844ff,
                colorSpace: 1
            }
        }, 320, 256, 384, 384);
        this.conicSymmetric = conicSymmetric;
        Phaser.Actions.AddMaskShape(conicSymmetric, { useInternal: true, region: { x: 0, y: 0, width: 384, height: 384 } });

        // Asymmetric conic is actually fine.
        const conicAsymmetric = this.add.gradient({
            repeatMode: 2, // SAWTOOTH
            shapeMode: 4, // CONIC_ASYMMETRIC
            start: { x: 0.5, y: 0.5 },
            shape: { x: 1, y: 0 },
            bands: {
                colorStart: 0x44ff88,
                colorEnd: 0xff8844,
                colorSpace: 1
            }
        }, 960, 256, 384, 384);
        this.conicAsymmetric = conicAsymmetric;
        Phaser.Actions.AddMaskShape(conicAsymmetric, { useInternal: true, region: { x: 0, y: 0, width: 384, height: 384 } });

        // You can instead reshape a symmetric conic gradient.
        // See `update`.
        const conicReshape = this.add.gradient({
            repeatMode: 2, // SAWTOOTH
            shapeMode: 3, // CONIC_SYMMETRIC
            start: { x: 0.5, y: 0.5 },
            shape: { x: 1, y: 0 },
            bands: {
                colorStart: 0xffcc44,
                colorEnd: 0x4488ff,
                colorSpace: 1
            }
        }, 640, 512, 384, 384);
        this.conicReshape = conicReshape;
        Phaser.Actions.AddMaskShape(conicReshape, { useInternal: true, region: { x: 0, y: 0, width: 384, height: 384 } });
    }

    update (time)
    {
        this.bilinear.offset = time / 1000;
        this.conicSymmetric.offset = time / 1000;
        this.conicAsymmetric.offset = time / 1000;

        // Reshape symmetric cone gradient to point in a different direction.
        // Shape is a Vector2 so supports many useful methods.
        this.conicReshape.shape.setAngle(time * Math.PI / 1000);
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
