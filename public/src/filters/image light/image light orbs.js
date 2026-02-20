class Example extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('orb-n', 'assets/normal-maps/orb-256.png');
        this.load.image('environment', 'assets/panorama-360/KPNO-Drone-360-2-CC2-by-NOIRLab.jpg')
    }

    create ()
    {
        const background = this.add.gradient({
            start: { x: 0, y: 1 },
            shape: { x: 0, y: -1 },
            bands: {
                colorStart: 0x2d3440,
                colorEnd: 0x204070
            },
        }, 640, 360, 1280, 720);

        // Create an object as the base for a PanoramaBlur.
        const envBlurSource = this.add.image(0, 0, 'environment').setOrigin(0);
        const envW = envBlurSource.width;
        const envH = envBlurSource.height;
        const panoramaBlur = envBlurSource.enableFilters().filters.internal.addPanoramaBlur({
            samplesX: envW / 16, // Be careful: more samples are much more costly!
            samplexY: envH / 16,
            power: 2 // Emphasise sun over darker areas.
        });

        // Render panorama at blur 1...
        const envTexture1 = this.textures.addDynamicTexture('environment-blur-1', envW, envH);
        envTexture1.draw(envBlurSource).render();

        // ... and at blur 0.5...
        const envTexture2 = this.textures.addDynamicTexture('environment-blur-0.5', envW, envH);
        panoramaBlur.power = 1.5;
        panoramaBlur.radius = 0.5;
        envTexture2.draw(envBlurSource).render();

        // ... and at blur 0.25...
        const envTexture3 = this.textures.addDynamicTexture('environment-blur-0.25', envW, envH);
        panoramaBlur.power = 1.25;
        panoramaBlur.radius = 0.25;
        envTexture3.draw(envBlurSource).render();

        // ... and at blur 0.125...
        const envTexture4 = this.textures.addDynamicTexture('environment-blur-0.125', envW, envH);
        panoramaBlur.power = 1.125;
        panoramaBlur.radius = 0.125;
        envTexture4.draw(envBlurSource).render();

        // ... and at blur 0.0625...
        const envTexture5 = this.textures.addDynamicTexture('environment-blur-0.0625', envW, envH);
        panoramaBlur.power = 1.0625;
        panoramaBlur.radius = 0.0625;
        envTexture5.draw(envBlurSource).render();

        // Remove blur source because blurs are costly per-frame.
        envBlurSource.destroy();

        // Draw an orb for reuse.
        const orb = this.add.rectangle(0, 0, 256, 256, 0xffffff);
        orb.enableFilters().filters.internal.addMask('orb-n');
        const orbTexture = this.textures.addDynamicTexture('orb', 256, 256);
        orbTexture.draw(orb, 128, 128).render();
        orb.destroy();

        // Light a series of orbs with the panorama at different roughness levels.
        const orb1 = this.add.image(200, 200, 'orb');
        this.orb1LightImage = orb1.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment-blur-1',
            normalMap: 'orb-n'
        });

        const orb2 = this.add.image(640, 200, 'orb');
        this.orb2LightImage = orb2.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment-blur-0.5',
            normalMap: 'orb-n'
        });

        const orb3 = this.add.image(1080, 200, 'orb');
        this.orb3LightImage = orb3.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment-blur-0.25',
            normalMap: 'orb-n'
        });

        const orb4 = this.add.image(200, 520, 'orb');
        this.orb4LightImage = orb4.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment-blur-0.125',
            normalMap: 'orb-n'
        });

        const orb5 = this.add.image(640, 520, 'orb');
        this.orb5LightImage = orb5.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment-blur-0.0625',
            normalMap: 'orb-n'
        });

        const orb6 = this.add.image(1080, 520, 'orb');
        this.orb6LightImage = orb6.enableFilters().filters.internal.addImageLight({
            environmentMap: 'environment', // Unfiltered environment.
            normalMap: 'orb-n'
        });
    }

    update (time, delta)
    {
        const filters = [
            this.orb1LightImage,
            this.orb2LightImage,
            this.orb3LightImage,
            this.orb4LightImage,
            this.orb5LightImage,
            this.orb6LightImage
        ];
        for (const filter of filters)
        {
            filter.viewMatrix
            .identity() // Reset matrix
            .rotateY(time / 5000) // Look left/right
            .rotateX(0.5 * Math.sin(time / 1765)); // Look up/down
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    backgroundColor: '#2d3440',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
